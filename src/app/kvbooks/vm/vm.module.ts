import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { VmComponent } from "./vm.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Vm",
      urls: [{ title: "Vm", url: "/vm" }, { title: "Vm" }],
    },
    component: VmComponent,
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
export class VmModule {}
