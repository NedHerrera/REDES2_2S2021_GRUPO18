import { App } from './app';
import dotenv from 'dotenv';
dotenv.config();

async function main(){
    const port = process.env.PORT || 4000;
    const app = new App(port);
    await app.listen();
}

main();



