import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { DocumentationComponent } from "./documentation.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Documentation",
      urls: [{ title: "Documentation", url: "/documentation" }, { title: "Documentation" }],
    },
    component: DocumentationComponent,
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
export class DocumentationModule {}
