//import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent }   from './app.component';
//@NgModule({
//    imports:      [ BrowserModule ],
//    declarations: [ AppComponent ],
//    bootstrap:    [ AppComponent ]
//})
//export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }