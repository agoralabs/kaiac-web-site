import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { TemplaterComponent } from "./templater.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Templater",
      urls: [{ title: "Templater", url: "/templater" }, { title: "Templater" }],
    },
    component: TemplaterComponent,
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
export class TemplaterModule {}
