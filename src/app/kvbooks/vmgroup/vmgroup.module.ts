import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { VmGroupComponent } from "./vmgroup.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "VmGroup",
      urls: [{ title: "VmGroup", url: "/vmgroup" }, { title: "VmGroup" }],
    },
    component: VmGroupComponent,
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
export class VmGroupModule {}
