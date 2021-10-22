import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid';
import { connect } from '../database';
import { aws_keys } from '../../keys'
import { Asistencia } from '../interfaces/asistencia.interface';
import AWS from 'aws-sdk';
const s3 = new AWS.S3(aws_keys.s3);
//GET ALL USERS
export async function getAllAsistencias(req: Request, res: Response): Promise<Response | void> {
    try {
        let servidor = process.env.FIRMA || 'desconocido';
        const conn = await connect();
        const asistencia = await conn.query('SELECT * FROM Asistencia');
        res.status(202);
        return res.status(202).json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            reportes: asistencia[0],
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
export async function getAsistenciasCarnet(req: Request, res: Response): Promise<Response | void> {
    try {
        let servidor = process.env.FIRMA || 'desconocido';
        const conn = await connect();
        const asistencia: Array<any> = await conn.query('SELECT * FROM Asistencia Where carnet = ?', [req.params['carnet']]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            reportes: asistencia[0],
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
export async function getAsistenciasID(req: Request, res: Response): Promise<Response | void> {
    try {
        let servidor = process.env.FIRMA || 'desconocido';
        const conn = await connect();
        const asistencia: Array<any> = await conn.query('SELECT * FROM Asistencia Where idEvento = ?', [req.params['id']]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            reportes: asistencia[0],
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
export async function createAsistencia(req: Request, res: Response):Promise<Response | void> {
    try {
        
        const conn = await connect();   
        let servidor = process.env.FIRMA || 'desconocido';
        
        const data = req.body;

        var result = "";

        if (data.image != undefined && data.image.toString() != ""){

            var nombrei = "fotos/" + uuid() + ".jpg";
        
        //se convierte la base64 a bytes
        let buff = Buffer.from(data.image,'base64');

        let bucket = process.env.BUCKET_NAME || 'desconocido';
        let bucketURL = process.env.BUCKET_URL || 'desconocido';    

        const params = {
          Bucket: bucket,
          Key: nombrei,
          Body: buff,
          ContentType: "image",
          ACL: 'public-read'
        };
        s3.putObject(params).promise();
        result = bucketURL + nombrei;

        }

        let imageURL = result
        let { carnet, estudiante, evento, idEvento, fecha } = req.body;
        
        const newReport: Asistencia = {
            carnet, 
            estudiante, 
            evento, 
            idEvento,
            fecha,
            servidor,
            imageURL
        }

        await conn.query('INSERT INTO Asistencia SET ?', [newReport]);
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

