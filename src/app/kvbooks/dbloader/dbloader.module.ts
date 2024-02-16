import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { DbLoaderComponent } from "./dbloader.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "DbLoader",
      urls: [{ title: "DbLoader", url: "/dbloader" }, { title: "DbLoader" }],
    },
    component: DbLoaderComponent,
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
export class DbLoaderModule {}
