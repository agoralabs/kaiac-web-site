import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { LambdaComponent } from "./lambda.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Lambda",
      urls: [{ title: "Lambda", url: "/lambda" }, { title: "Lambda" }],
    },
    component: LambdaComponent,
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
export class LambdaModule {}
