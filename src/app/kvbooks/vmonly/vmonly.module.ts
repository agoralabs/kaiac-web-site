import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { VmonlyComponent } from "./vmonly.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Vmonly",
      urls: [{ title: "Vmonly", url: "/vmonly" }, { title: "Vmonly" }],
    },
    component: VmonlyComponent,
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
export class VmonlyModule {}
