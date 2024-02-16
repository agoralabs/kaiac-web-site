import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { EcrCopyComponent } from "./ecrcopy.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "EcrCopy",
      urls: [{ title: "EcrCopy", url: "/ecrcopy" }, { title: "EcrCopy" }],
    },
    component: EcrCopyComponent,
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
export class EcrCopyModule {}
