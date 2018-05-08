import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
  providers: [GooglePlus]
})
export class SignInPage {

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

  /**
   * Method responsible to sign in through the user email and user password
   */
  signInByApp() {
    console.log(this.user)
  }

  /**
   * Method responsible to sign in through a Google account.
   */
  signInByGoogle(){
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.user.completed_name = res.displayName;
        this.user.name = res.givenName;
        this.user.email = res.email;
        this.user.last_name = res.familyName;
        this.user.google_user_id = res.userId;
        this.user.google_acess_token = res.acessToken;
        this.user.image_url = res.imageUrl;
        this.user.is_authenticated = true;
        this.navCtrl.push(TabsPage, {user: this.user});
      })
      .catch(err => console.error(err));
  }

  /**
   * Method responsible to logout through a Google account.
   */
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
