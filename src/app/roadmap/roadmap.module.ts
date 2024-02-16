import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { RoadmapComponent } from "./roadmap.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Roadmap",
      urls: [{ title: "Roadmap", url: "/roadmap" }, { title: "Roadmap" }],
    },
    component: RoadmapComponent,
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
export class RoadmapModule {}
