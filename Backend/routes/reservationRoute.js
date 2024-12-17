import express from 'express';
import {sendResrvation} from '../controller/reservationController.js';

const router = express.Router();

router.post("/send",sendResrvation);



export default router;
