/**
 * Created by Sander on 8-6-2018.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverviewComponent} from './components/overview/overview.component';
import {StreamingComponent} from './components/streaming/streaming.component';
import {OverviewStartComponent} from './components/overview/overview-start/overview-start.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, children: [
    {path: '', component: OverviewStartComponent},
    { path: ':name', component: StreamingComponent}
  ]},
  { path: 'test', component: StreamingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
