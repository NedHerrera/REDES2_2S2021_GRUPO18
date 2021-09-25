import dotenv from 'dotenv';
dotenv.config();

const MONGO_OPTIONS = {
    autoIndex: true, // Don't build indexes
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'root';
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'redes2';
const MONGO_HOST = process.env.MONGO_URL || `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}` || `localhost:27017`;

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    database: MONGO_DATABASE,
    url: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${MONGO_DATABASE}`
};


const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 27017;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;

