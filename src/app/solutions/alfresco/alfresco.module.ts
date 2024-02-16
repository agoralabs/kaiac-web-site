import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AlfrescoComponent } from "./alfresco.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Alfresco",
      urls: [{ title: "Alfresco", url: "/solutions/alfresco" }, { title: "Alfresco" }],
    },
    component: AlfrescoComponent,
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
export class AlfrescoModule {}
