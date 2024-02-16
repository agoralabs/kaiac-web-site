import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AsGroupComponent } from "./asgroup.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "AsGroup",
      urls: [{ title: "AsGroup", url: "/asgroup" }, { title: "AsGroup" }],
    },
    component: AsGroupComponent,
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
export class AsGroupModule {}
