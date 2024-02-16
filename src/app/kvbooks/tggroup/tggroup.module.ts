import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { TgGroupComponent } from "./tggroup.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "TgGroup",
      urls: [{ title: "TgGroup", url: "/tggroup" }, { title: "Vpc" }],
    },
    component: TgGroupComponent,
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
export class TgGroupModule {}
