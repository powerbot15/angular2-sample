import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WeatherService {

    requestURL : string = '';

    weatherResponse : any;

    callback : Function;

    callbackContext : any;

    constructor(private http : Http){

    }
    getWeatherByCity (city : string, callback : Function, context : any) {

        this.requestURL = `//api.openweathermap.org/data/2.5/forecast?q=${city},&APPID=b595a500daacfaa71158e3af1ff44f08&units=metric&mode=json`;

        this.callbackContext = context;

        return this.http.get(this.requestURL)
            .subscribe((res:Response) => callback.call(context || window, res.json()));

    }

    proceedCallback (res : Response) {
        this.callback.call(this.callbackContext || window, res.json())
    }

    handleError (error : any) {
        console.dir(error);
    }

}
