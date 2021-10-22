import { Router } from 'express'
import { createReporte, getReporteID, getReportesCarnet, getAllReportes } from '../controllers/report.controller'

const router = Router();

router.route('/create/reporte')
    .post(createReporte)

router.route('/get/reporte')
    .get(getAllReportes)

router.route('/get/reporte/:carnet')
    .get(getReportesCarnet)

router.route('/get/reporte/id/:id')
    .get(getReporteID)

export default router;