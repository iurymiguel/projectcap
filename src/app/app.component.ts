import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Globalization } from '@ionic-native/globalization';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SignInPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translateService: TranslateService,
    private globalization: Globalization) {
    platform.ready().then(() => {
      //if a language was not found, the default will be set.
      translateService.setDefaultLang("pt"); 
      this.getLanguage(splashScreen,statusBar);
    });
    
  }

  /**
   * Gets the language according to the language in device settings.
   */
  getLanguage(splashScreen, statusBar) {
    this.globalization.getPreferredLanguage()
      .then(res => {
        //res.value contains, for example, pt-BR or en-US or es-ES string.
        this.translateService.use(res.value.substring(0,2)); //gets the two first charecters of the string explained above. pt or en or es.
        statusBar.styleDefault();
        splashScreen.hide();
      })
      .catch(e => {
        console.log(e)
      });
  }
}
