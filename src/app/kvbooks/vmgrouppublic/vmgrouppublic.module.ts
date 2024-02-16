import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { VmGroupPublicComponent } from "./vmgrouppublic.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "VmGroupPublic",
      urls: [{ title: "VmGroupPublic", url: "/vmgrouppublic" }, { title: "VmGroupPublic" }],
    },
    component: VmGroupPublicComponent,
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
export class VmGroupPublicModule {}
