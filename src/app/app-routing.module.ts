import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumComponent} from "./album/album.component";


const routes: Routes = [
	{
		component:AlbumComponent,path:''
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
