import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    DATABASE_URL: string
    APP_URL: string
    PORT: string
    BETTER_AUTH_SECRET: string
    BETTER_AUTH_URL: string
}

const LoadEnv = (): EnvConfig => {
    return {
        DATABASE_URL: process.env.DATABASE_URL as string,
        APP_URL: process.env.APP_URL as string,
        PORT: process.env.PORT as string,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string
    }
}

export const EnvVars = LoadEnv();