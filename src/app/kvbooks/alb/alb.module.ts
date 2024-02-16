import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AlbComponent } from "./alb.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Alb",
      urls: [{ title: "Alb", url: "/alb" }, { title: "Alb" }],
    },
    component: AlbComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class AlbModule {}
