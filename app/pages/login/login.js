import {Page, Alert, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

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
		this.nav.push(HomePage);
	}

}
