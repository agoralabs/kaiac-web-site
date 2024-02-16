import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { VpcComponent } from "./vpc.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Vpc",
      urls: [{ title: "Vpc", url: "/vpc" }, { title: "Vpc" }],
    },
    component: VpcComponent,
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
export class VpcModule {}
