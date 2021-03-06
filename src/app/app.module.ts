import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';


import {AppComponent} from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { CareerComponent } from './career/career.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        HeaderComponent,
        CareerComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        Ng2PageScrollModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
