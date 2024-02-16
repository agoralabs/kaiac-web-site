import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { CiCdComponent } from "./cicd.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "CiCd",
      urls: [{ title: "CiCd", url: "/cicd" }, { title: "CiCd" }],
    },
    component: CiCdComponent,
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
export class CiCdModule {}
