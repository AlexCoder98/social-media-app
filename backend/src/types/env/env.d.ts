import { Secret } from "jsonwebtoken";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            MONGODB_NAME: string;
            MONGODB_PASSWORD: string;
            MONGODB_COLLECTION_NAME: string;
            JWT_SECRET: Secret;
        }
    }
};