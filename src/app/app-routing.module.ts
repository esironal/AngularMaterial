import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoModule } from './demo/demo.module';
import { ContactManagerModule } from './contact-manager/contact-manager.module';

const routes:Routes = [
    {path:'demo', loadChildren: () => DemoModule},
    {path:'contactmanager', loadChildren: () => ContactManagerModule},
    {path:'**', redirectTo:'contactmanager'}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
