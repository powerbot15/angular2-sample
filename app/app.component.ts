import { AppModel } from './models/app.model';
import { Component } from '@angular/core';
import {WeatherService} from './services/weather-service';
import { Http, Response } from '@angular/http';

@Component({
    selector: '[data-my-app]',
    templateUrl: '../templates/template.main.html',
    providers : [WeatherService]
})

export class AppComponent {

    constructor (private service: WeatherService) {

    }

    model = new AppModel();

    setName (event : any) {

        this.model.query = event.target.value;

    }

    //showWeather (response : any) {
    //
    //    console.dir(response);
    //
    //    this.model.geographic.country = response.city.country;
    //
    //}

    checkSearch (event : any) {

        if(event.keyCode == 13){

            this.checkWeather();

        }

    }

    checkWeather () {

        this.service.getWeatherByCity(this.model.query, this.model.setWeather, this.model);

    }
}
