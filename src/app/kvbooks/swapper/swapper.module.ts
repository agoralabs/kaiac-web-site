import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { SwapperComponent } from "./swapper.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Swapper",
      urls: [{ title: "Swapper", url: "/swapper" }, { title: "Swapper" }],
    },
    component: SwapperComponent,
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
export class SwapperModule {}
