import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterModule } from '@angular-nest-herokuapp/angular-nest-herokuapp-client/footer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: '**',
        loadChildren: () =>
          import('./pages/not-found/not-found.module').then(
            m => m.NotFoundModule
          )
      }
    ]),
    FooterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
