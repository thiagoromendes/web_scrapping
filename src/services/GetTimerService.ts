import puppeteer from 'puppeteer';
import { Timer } from '../model/Timer';

interface Type{
    param: string;
}

class GetTimerService{
    public async execute({param}:Type): Promise<Timer | {}>{
        const validParams = ['child','adult'];

        if(!validParams.includes(param)){
            return {message:'Invalid url parameter, send adult or child'}
        }

        const timer = new Timer();
        let value:string | null | undefined;

        await (
            async () => {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(`${process.env.LINK_SCRAPPING}${param === 'adult' ? process.env.ID_ADULT : process.env.ID_CHILD}`);
                value = await page.evaluate(() => {
                   return document.querySelector('#lblRelogio')?.textContent;
                })
                await browser.close();
            }
            
        )();

        if(value) timer.time = value
        else timer.time = 'Indefinido';
     
        timer.type = param;

        return timer;
    }
}

export {GetTimerService};