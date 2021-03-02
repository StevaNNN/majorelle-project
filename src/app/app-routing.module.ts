import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {KitchensComponent} from './containers/kitchens/kitchens.component';
import {BathroomsComponent} from './containers/bathrooms/bathrooms.component';
import {BedroomsComponent} from './containers/bedrooms/bedrooms.component';
import {LivingroomsComponent} from './containers/livingrooms/livingrooms.component';
import {ProjectingComponent} from './containers/projecting/projecting.component';
import {FirmsComponent} from './containers/firms/firms.component';
import {OfficeFurnitureComponent} from './containers/office-furniture/office-furniture.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'kitchens',
  component: KitchensComponent
}, {
  path: 'livingrooms',
  component: LivingroomsComponent
}, {
  path: 'firms',
  component: FirmsComponent
}, {
  path: 'office-furniture',
  component: OfficeFurnitureComponent
}, {
  path: 'bathrooms',
  component: BathroomsComponent
}, {
  path: 'bedrooms',
  component: BedroomsComponent
}, {
  path: 'projecting',
  component: ProjectingComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
