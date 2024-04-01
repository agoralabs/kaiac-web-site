import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { FederationComponent } from "./federation.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Federation",
      urls: [{ title: "Federation", url: "/solutions/federation" }, { title: "Federation" }],
    },
    component: FederationComponent,
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
export class FederationModule {}
