import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { PackerComponent } from "./packer.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Packer",
      urls: [{ title: "Packer", url: "/packer" }, { title: "Packer" }],
    },
    component: PackerComponent,
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
export class PackerModule {}
