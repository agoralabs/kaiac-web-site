import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { OperationsComponent } from "./operations.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Operations",
      urls: [{ title: "Operations", url: "/operations" }, { title: "Operations" }],
    },
    component: OperationsComponent,
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
export class OperationsModule {}
