import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostHomeComponent } from './post-home/post-home.component';

const routes: Routes = [
  {
    path: '',
    component: PostHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
