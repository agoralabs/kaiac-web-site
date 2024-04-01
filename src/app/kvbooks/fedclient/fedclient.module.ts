import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { FedClientComponent } from "./fedclient.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "FedClient",
      urls: [{ title: "FedClient", url: "/fedclient" }, { title: "FedClient" }],
    },
    component: FedClientComponent,
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
export class FedClientModule {}
