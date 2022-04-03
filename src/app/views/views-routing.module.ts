import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsHomeComponentComponent } from './views-home-component/views-home-component.component';
import { StatistcsComponent } from './statistcs/statistcs.component';
const routes: Routes = [
  {
    path: '',
    component: ViewsHomeComponentComponent,
  },
  {
    path: 'statistics',
    component: StatistcsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
