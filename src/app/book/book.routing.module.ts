import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { BookDashboardComponent } from 'app/book/book-dashboard/book-dashboard.component';
import { BookDetailComponent } from 'app/book/book-detail/book-detail.component';

const routes: Route[] = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: BookDashboardComponent},
  {path: 'book/:isbn', component: BookDetailComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookRoutingModule { }
