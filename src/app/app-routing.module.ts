/**
 * Created by Sander on 8-6-2018.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverviewComponent} from './components/overview/overview.component';
import {StreamingComponent} from './components/streaming/streaming.component';
import {OverviewStartComponent} from './components/overview/overview-start/overview-start.component';
import {OverviewGridComponent} from './components/overview/overview-grid/overview-grid.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'listview', component: OverviewComponent, children: [
    {path: '', component: OverviewStartComponent},
    { path: ':name', component: StreamingComponent}
  ]},
  {path : 'overview/watch/:name', component: StreamingComponent},
  { path: 'test', component: StreamingComponent},
  { path: 'overview', component: OverviewGridComponent, children: [
    {
      path: 'view/:name', component: StreamingComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
