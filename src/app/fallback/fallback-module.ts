import { RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FallbackRoutingModule } from './fallback.routing.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FallbackRoutingModule
  ],
  declarations: [NotFoundComponent]
})

export class FallBackModule { }
