import { Component } from '@angular/core';

@Component({

  //Delcare the selector on the app.component.html
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  //Remember to declare in the coresponding HTML page
  title = "Employee page";

  number1 = 100;
  number2 = 20;
  number3 = 20;
  visible = this.ShowContent(this.number1, this.number2, this.number3);

  colour: any;

  IsVisible = true;



  ShowContent(val1: number, val2: number, val3: number): boolean {
    if (val1 * val2 > val3) {
      return true;

    } else {
      return false;
    }
  }

  //Created OnChange function to show different results if true or false
  OnChange(arg: any) {
    this.IsVisible = arg;
  }

  SetColour($event: any) {
    this.colour = $event.target.value;
  }

  Employee: any[] = [];

  constructor() {
    this.Employee = [
      {
        Name: 'Nawaz',
        Age: 21,
        Gender: 'M'
      }, {
        Name: 'Iyin',
        Age: 21,
        Gender: 'M'
      }, {
        Name: 'Dan',
        Age: 21,
        Gender: 'M'
      }, {
        Name: 'Kelley',
        Age: 21,
        Gender: 'M'
      }
    ]
  }

  GetMoreEmployee(): void {
    this.Employee = [
      {
        Name: 'Nawaz',
        Age: 26,
        Gender: 'M'
      }, {
        Name: 'Iyin',
        Age: 26,
        Gender: 'F'
      }, {
        Name: 'Dan',
        Age: 26,
        Gender: 'M'
      }, {
        Name: 'Kelley',
        Age: 27,
        Gender: 'F'
      }, {
        Name: 'Louis',
        Age: 27,
        Gender: 'M'
      }
    ]
  }

  TrackByEmployeeName(index: number, employee: any): string {
    return employee.name;
  }

  CheckAge(Age: number) {
    let val = Age < 18 ? 'Under 18': 'Above 18';

    switch(val) {
      case "Under 18":
      return "red";
      case "Above 18":
      return "violet";
    }

    return "";

  }

  GetCSS(IsEven: any) {
    if (IsEven) {
      return "even"
    } else {
      return "odd"
    }
  }
}
