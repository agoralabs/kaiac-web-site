import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { MoodleComponent } from "./moodle.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Moodle",
      urls: [{ title: "Moodle", url: "/solutions/moodle" }, { title: "Moodle" }],
    },
    component: MoodleComponent,
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
export class MoodleModule {}
