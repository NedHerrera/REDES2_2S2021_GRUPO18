import express, { Application } from 'express';
import morgan from 'morgan';

// Routes
import IndexRoutes from './routes/index.routes';
import AsistenciaRoutes from './routes/asistencia.routes';

export class App{

    private app: Application;

    constructor(private port: number | string){
        this.port = port
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 4000);       
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }
    
    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/api/', AsistenciaRoutes);
        this.app.use('/', IndexRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port ${this.port} :D`);
    }

}