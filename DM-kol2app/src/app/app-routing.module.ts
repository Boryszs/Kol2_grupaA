import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDMComponent } from './components/orders-dm/orders-dm.component';
import { OrdersDetailsDMComponent } from './components/orders-details-dm/orders-details-dm.component';
const routes: Routes = [
  {
    path: '',
    component: OrdersDMComponent,
  },
  {
    path: 'detail/:id',
    component: OrdersDetailsDMComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
