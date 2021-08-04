import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostHomeComponent } from './post-home/post-home.component';

@NgModule({
  declarations: [PostHomeComponent],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
