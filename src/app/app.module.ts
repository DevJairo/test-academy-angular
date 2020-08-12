import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './user/services/user.service';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
