import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { DbOnlyComponent } from "./dbonly.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "DbOnly",
      urls: [{ title: "DbOnly", url: "/dbonly" }, { title: "DbOnly" }],
    },
    component: DbOnlyComponent,
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
export class DbOnlyModule {}
