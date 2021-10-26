import { Request, Response } from 'express'

// DB
import { connect } from '../database';
// Interfaces
import { Report } from '../interfaces/report.interface';



//GET ALL USERS
export async function getAllReportes(req: Request, res: Response): Promise<Response | void> {
    try {
        let servidor = process.env.FIRMA || 'desconocido';
        const conn = await connect();
        const reportes = await conn.query('SELECT * FROM Report');
        res.status(202);
        return res.status(202).json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            reportes: reportes[0],
        });
    }
    catch (e) {
        console.log(e);
        res.status(404);
        return res.json({
            message: 'Error :o',
            status: 404
        });
    }
}

//GET REPORT BY CARNET
export async function getReportesCarnet(req: Request, res: Response): Promise<Response | void> {
    try {
        let servidor = process.env.FIRMA || 'desconocido';
        const conn = await connect();
        const reportes: Array<any> = await conn.query('SELECT * FROM Report Where carnet = ?', [req.params['carnet']]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            reportes: reportes[0],
        });
    }
    catch (e) {
        console.log(e);
        res.status(404);
        return res.json({
            message: 'Error :o',
            status: 404
        });
    }
}

//GET REPORT BY ID
export async function getReporteID(req: Request, res: Response): Promise<Response | void> {
    try {
        let servidor = process.env.FIRMA || 'desconocido';
        const conn = await connect();
        const reporte: Array<any> = await conn.query('SELECT * FROM Report Where idReport = ?', [req.params['id']]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            reportes: reporte[0],
        });
    }
    catch (e) {
        console.log(e);
        res.status(404);
        return res.json({
            message: 'Error :o',
            status: 404
        });
    }
}

//CREATE NEW USER
export async function createReporte(req: Request, res: Response):Promise<Response | void> {
    try {
        
        const conn = await connect();   
        let servidor = process.env.FIRMA || 'desconocido';
        
        let { carnet, nombre, curso, fecha, cuerpo } = req.body;
        
        const newReport: Report = {
            carnet, 
            nombre, 
            curso, 
            servidor,
            fecha,
            cuerpo
        }


        await conn.query('INSERT INTO Report SET ?', [newReport]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            reporte: newReport
        });
    
    } catch (e) {
        console.log(e);
        res.status(404);
        return res.json({
            message: 'Error :o',
            status: 404
        });
    }
}

