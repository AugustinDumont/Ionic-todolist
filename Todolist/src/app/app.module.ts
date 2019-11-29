import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";

var firebaseConfig = {
  apiKey: "AIzaSyBpbkXlIFJ5NqtslXbt9UTEmeWsBpjWyx0",
  authDomain: "ionic-todolist-e4043.firebaseapp.com",
  databaseURL: "https://ionic-todolist-e4043.firebaseio.com",
  projectId: "ionic-todolist-e4043",
  storageBucket: "ionic-todolist-e4043.appspot.com",
  messagingSenderId: "330135648673",
  appId: "1:330135648673:web:5742d0f8cb2213464773e0",
  measurementId: "G-S1WST0SJ1C"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
