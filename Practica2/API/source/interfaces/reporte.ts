import { Document } from 'mongoose';

export default interface IReporte extends Document {
    carnet: string;
    nombre: string;
    curso: string;
    servidor: string;
    fecha: string;
    cuerpo: string;
}
