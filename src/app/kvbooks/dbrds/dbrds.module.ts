import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { DbRdsComponent } from "./dbrds.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "DbRds",
      urls: [{ title: "DbRds", url: "/dbrds" }, { title: "DbRds" }],
    },
    component: DbRdsComponent,
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
export class DbRdsModule {}
