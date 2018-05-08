import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage {

  public user = {
    completed_name: '',
    name: '',
    last_name: '',
    email: '',
    password: '',
    google_user_id: '',
    google_acess_token: '',
    image_url: '',
    is_authenticated: false
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus) {

  }

  ionViewDidLoad() {
    let user = this.navParams.get("user");
    if (user) {
      this.user = user;
    }
  }

  logoutByGoogle() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.user = {
          completed_name: '',
          name: '',
          last_name: '',
          email: '',
          password: '',
          google_user_id: '',
          google_acess_token: '',
          image_url: '',
          is_authenticated: false
        };
      })
      .catch(err => console.error(err));
  }

}
