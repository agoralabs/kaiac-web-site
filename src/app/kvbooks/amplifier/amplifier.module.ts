import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AmplifierComponent } from "./amplifier.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Amplifier",
      urls: [{ title: "Amplifier", url: "/amplifier" }, { title: "Amplifier" }],
    },
    component: AmplifierComponent,
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
export class AmplifierModule {}
