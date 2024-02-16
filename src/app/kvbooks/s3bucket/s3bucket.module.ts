import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { S3BucketComponent } from "./s3bucket.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "S3Bucket",
      urls: [{ title: "S3Bucket", url: "/s3bucket" }, { title: "S3Bucket" }],
    },
    component: S3BucketComponent,
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
export class S3BucketModule {}
