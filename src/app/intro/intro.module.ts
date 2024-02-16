import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IntroComponent } from "./intro.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Intro",
      urls: [{ title: "Intro", url: "/intro" }, { title: "KaiaC" }],
    },
    component: IntroComponent,
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
export class IntroModule {}
