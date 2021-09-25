import express from 'express';
import controller from '../controllers/reporte';

const router = express.Router();

router.post('/create/reporte', controller.createReporte);
router.get('/get/reporte', controller.getAllReportes);
router.get('/get/reporte/:carnet', controller.getReporte);
export = router;
