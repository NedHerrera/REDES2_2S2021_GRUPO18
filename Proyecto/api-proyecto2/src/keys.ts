import dotenv from 'dotenv';
dotenv.config();
export let aws_keys = {
    s3: {
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESKEY,
        secretAccessKey: process.env.AWS_SECRETKEY,
        //apiVersion: '2006-03-01',
    }
}
