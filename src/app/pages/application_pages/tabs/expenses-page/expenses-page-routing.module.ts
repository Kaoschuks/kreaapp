import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesPagePage } from './expenses-page.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesPagePageRoutingModule {}
