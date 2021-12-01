import { Router } from "express";
import {TimerController} from "./controller/TimerController";

const timerController = new TimerController();

const routes = Router();

routes.get("/waiting-time/:type", timerController.show);

export default routes;