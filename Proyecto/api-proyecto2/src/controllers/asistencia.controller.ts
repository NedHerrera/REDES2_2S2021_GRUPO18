import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid';
import { connect } from '../database';
import { aws_keys } from '../keys'
import { Asistencia } from '../interfaces/asistencia.interface';
import dotenv from 'dotenv';
dotenv.config();
import AWS from 'aws-sdk';
const s3 = new AWS.S3(aws_keys.s3);
const servidor = process.env.FIRMA || 'desconocido';

//GET ALL ASISTENCIA
export async function getAllAsistencias(req: Request, res: Response): Promise<Response | void> {
    try {
        
        const conn = await connect();
        const asistencia = await conn.query('SELECT * FROM Asistencia');
        res.status(202);
        return res.status(202).json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            asistencias: asistencia[0],
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

//GET ASISTENCIA BY CARNET
export async function getAsistenciasCarnet(req: Request, res: Response): Promise<Response | void> {
    try {
        
        const conn = await connect();
        const asistencia: Array<any> = await conn.query('SELECT * FROM Asistencia Where carnet = ?', [req.params['carnet']]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            asistencias: asistencia[0],
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

//GET ASISTENCIA BY ID
export async function getAsistenciasID(req: Request, res: Response): Promise<Response | void> {
    try {
        
        const conn = await connect();
        const asistencia: Array<any> = await conn.query('SELECT * FROM Asistencia Where idEvento = ?', [req.params['id']]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            asistencias: asistencia[0],
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

//CREATE NEW ASISTENCIA
export async function createAsistencia(req: Request, res: Response):Promise<Response | void> {
    try {

        let { carnet, estudiante, evento, idEvento, fecha, image} = req.body;
        const conn = await connect();              
        let result = "";

        if (image != undefined && image.toString() != ""){

        let nombrei = "fotos/" + uuid() + ".jpg";
        let data = image.toString()
        data = data.replace(/^data:image\/\w+;base64,/, "")
        
        //se convierte la base64 a bytes
        let buff = Buffer.from(data,'base64');

        let bucket = process.env.BUCKET_NAME || 'desconocido';
        let region = process.env.AWS_REGION || 'desconocido';
        let bucketURL = `https://${bucket}.s3.${region}.amazonaws.com/${nombrei}`

        const params = {
          Bucket: bucket,
          Key: nombrei,
          Body: buff,
          ContentEncoding: 'base64',
          ContentType: "image",
          ACL: 'public-read'
        };
        s3.putObject(params).promise();
        result = bucketURL;
        }

        let imageURL = result
                
        const newAsistencia: Asistencia = {
            carnet, 
            estudiante, 
            evento, 
            idEvento,
            fecha,
            servidor,
            imageURL
        }

        await conn.query('INSERT INTO Asistencia SET ?', [newAsistencia]);
        res.status(202);
        return res.json({
            mensaje: `Solicitud atendida por el servidor ${servidor} :D`,
            asistencia: newAsistencia
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

