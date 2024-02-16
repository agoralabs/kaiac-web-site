import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { InstallComponent } from "./install.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Install",
      urls: [{ title: "Install", url: "/install" }, { title: "KaiaC" }],
    },
    component: InstallComponent,
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
export class InstallModule {}
