import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { FedUsersComponent } from "./fedusers.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "FedUsers",
      urls: [{ title: "FedUsers", url: "/fedusers" }, { title: "FedUsers" }],
    },
    component: FedUsersComponent,
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
export class FedUsersModule {}
