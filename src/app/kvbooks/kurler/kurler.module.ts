import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { KurlerComponent } from "./kurler.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Kurler",
      urls: [{ title: "Kurler", url: "/kurler" }, { title: "Kurler" }],
    },
    component: KurlerComponent,
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
export class KurlerModule {}
