import {Page, Alert, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	
	static get parameters() {
		return [[NavController]];
	}

	constructor(nav) {
		this.nav = nav;
	}
	
	doAlert() {
		let teste = 1 + 1;
		
		let alert = Alert.create({
			title: 'New Friend!',
			message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
			buttons: ['Ok = ' + teste]
    });
    this.nav.present(alert);
  }

}
