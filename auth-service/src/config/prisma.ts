import { PrismaClient } from "@prisma/client/extension";

class PrismaSingleton {
    private static instance: InstanceType<typeof PrismaClient>;
    private constructor() { }

    public static getInstance(): InstanceType<typeof PrismaClient> {
        if (!PrismaSingleton.instance) {
            PrismaSingleton.instance = new PrismaClient({
                log: ['error', 'warn'],
                errorFormat: 'pretty'
            });
        }
        return PrismaSingleton.instance;
    }
}

export const prismaInstance = PrismaSingleton.getInstance();

