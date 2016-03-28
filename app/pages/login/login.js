import {Page, Alert, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Http} from 'angular2/http';
import {provide} from 'angular2/core';
import {CordovaOauth, Google} from 'ng2-cordova-oauth/core';

@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
		
	static get parameters() {
		return [[NavController]];
	}

	constructor(nav) {
		this.nav = nav;
	}
	
	login() {
		this.cordovaOauth = new CordovaOauth(new Google({clientId: "", appScope: ["email"]}));
        this.cordovaOauth.login().then((success) => {
                console.log(JSON.stringify(success));
            }, (error) => {
                console.log(error);
            });
		//this.nav.push(HomePage);
	}

}
