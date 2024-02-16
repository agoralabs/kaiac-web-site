import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { S3WebsiteComponent } from "./s3website.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "S3Website",
      urls: [{ title: "S3Website", url: "/s3website" }, { title: "S3Website" }],
    },
    component: S3WebsiteComponent,
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
export class S3WebsiteModule {}
