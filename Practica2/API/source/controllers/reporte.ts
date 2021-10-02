import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Reporte from '../models/reporte';

const servidor = process.env.FIRMA || 'desconocido';

const createReporte = (req: Request, res: Response, next: NextFunction) => {

    let { carnet, nombre, curso, fecha, cuerpo } = req.body;


    const reporte = new Reporte({
        _id: new mongoose.Types.ObjectId(),
        carnet,
        nombre,
        curso,
        servidor,
        fecha,
        cuerpo
    });

    return reporte
        .save()
        .then((result) => {
            return res.status(202).json({
                mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
                reporte: result
            });
        })
        .catch((error) => {
            return res.status(404).json({
                message: error.message,
                error
            });
        }); 
};

const getAllReportes = (req: Request, res: Response, next: NextFunction) => {

     Reporte.find()
        .exec()
        .then((reportes) => {
            return res.status(202).json({
                mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
                reportes: reportes,
                count: reportes.length
            });
        })
        .catch((error) => {
            return res.status(404).json({
                message: error.message,
                error
            });
        }); 
};

const getReporte = (req: Request, res: Response, next: NextFunction) => {

    let carnet = req.params['carnet'];

    Reporte.find({carnet: carnet})
       .exec()
       .then((reportes) => {
           return res.status(202).json({
               mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
               reportes: reportes,
               count: reportes.length
           });
       })
       .catch((error) => {
           return res.status(404).json({
               message: error.message,
               error
           });
       }); 
};

const getReporteID = (req: Request, res: Response, next: NextFunction) => {

    let id = req.params['id'];

    Reporte.findById(id)        
        .lean()
       .exec()
       .then((reportes) => {
           return res.status(202).json({
               mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
               reportes: reportes,
           });
       })
       .catch((error) => {
           return res.status(404).json({
               message: error.message,
               error
           });
       }); 
};

export default { createReporte, getAllReportes, getReporte, getReporteID };
