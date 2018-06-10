/**
 * Created by Sander on 8-6-2018.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverviewComponent} from './components/overview/overview.component';
import {StreamingComponent} from './components/streaming/streaming.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, children: [
    { path: ':name', component: StreamingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
