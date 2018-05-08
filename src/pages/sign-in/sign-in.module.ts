import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInPage } from './sign-in';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPage),
    TranslateModule.forChild() //every time which a page is generated, it is important to call this method in order to translate.
  ],
})
export class SignInPageModule {}
