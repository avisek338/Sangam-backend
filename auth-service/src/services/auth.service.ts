import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';
import { AuthResponse, CreateUserDto, LoginDto, User } from '../models/user.model';
import config from '../config/config';

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(userData: CreateUserDto): Promise<AuthResponse> {
    // Check if user exists
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create user
    const user = await this.userRepository.create({
      ...userData,
      password: hashedPassword
    });

    // Generate token
    const token = this.generateToken(user);

    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    return { token, user: userWithoutPassword };
  }

  async login(loginData: LoginDto): Promise<AuthResponse> {
    // Find user
    const user = await this.userRepository.findByEmail(loginData.email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate token
    const token = this.generateToken(user);

    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    return { token, user: userWithoutPassword };
  }

  private generateToken(user: User): string {
    return jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      config.jwtSecret,
      { expiresIn: '1d' }
    );
  }
}