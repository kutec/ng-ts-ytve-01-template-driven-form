import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("form") form;

  data: Object = {};

  formSubmit() {
    console.log("A valid Template Driven Form: ", this.form);
  }
}
