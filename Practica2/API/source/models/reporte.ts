import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IReporte from '../interfaces/reporte';

const ReporteSchema: Schema = new Schema(
    {
        carnet: { type: String, required: true },
        nombre: { type: String, required: true },
        curso:  { type: String, required: true },
        servidor :  { type: String, required: true },
        fecha:  { type: String, required: true },
        cuerpo:  { type: String, required: true },
    },
    {
        timestamps: true
    }
);

ReporteSchema.post<IReporte>('save', function () {
    logging.info('Mongo', 'Checkout the report we just saved: ', this);
});

export default mongoose.model<IReporte>('Reporte', ReporteSchema);
