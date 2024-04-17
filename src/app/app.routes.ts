import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConvertComponent } from './convert/convert.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ConversionComponent } from './conversion/conversion.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'convert', component: ConvertComponent},
    {path: 'conversion', component: ConversionComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '404', component: NotfoundComponent},
    {path: '**', component: NotfoundComponent}
];
