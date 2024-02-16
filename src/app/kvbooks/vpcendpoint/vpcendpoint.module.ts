import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { VpcEndpointComponent } from "./vpcendpoint.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "VpcEndpoint",
      urls: [{ title: "VpcEndpoint", url: "/vpcendpoint" }, { title: "VpcEndpoint" }],
    },
    component: VpcEndpointComponent,
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
export class VpcEndpointModule {}
