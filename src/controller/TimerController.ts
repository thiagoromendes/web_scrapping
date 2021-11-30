import { Request, Response } from "express";
import { GetTimerService } from "../services/GetTimerService";


class TimerController{
    async show(request:Request, response: Response){
        const{type} = request.params;

        const getTimer = new GetTimerService();

        const timer = await getTimer.execute({param:type});

        return response.json(timer);
        
    }
}

export {TimerController};