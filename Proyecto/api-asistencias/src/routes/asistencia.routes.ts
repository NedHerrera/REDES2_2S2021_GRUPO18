import { Router } from 'express'
import { createAsistencia, getAsistenciasID, getAsistenciasCarnet, getAllAsistencias } from '../controllers/asistencia.controller'

const router = Router();

router.route('/create/asistencia')
    .post(createAsistencia)

router.route('/get/asistencia')
    .get(getAllAsistencias)

router.route('/get/asistencia/:carnet')
    .get(getAsistenciasCarnet)

router.route('/get/asistencia/id/:id')
    .get(getAsistenciasID)

export default router;