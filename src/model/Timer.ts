import {v4 as uuid} from 'uuid';

class Timer {

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

    id!: string;
    time!: string;
    type!: string;

}

export {Timer}