import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { DbDumperComponent } from "./dbdumper.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "DbDumper",
      urls: [{ title: "DbDumper", url: "/dbdumper" }, { title: "DbDumper" }],
    },
    component: DbDumperComponent,
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
export class DbDumperModule {}
