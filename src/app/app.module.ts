import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AuthModule} from './auth/auth.module';


import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, FormsModule, HttpModule, AuthModule, RouterModule.forRoot(rootRouterConfig)],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {

}
