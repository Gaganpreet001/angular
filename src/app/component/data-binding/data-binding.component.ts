import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
// binding all this data in html is called one way data binding
export class DataBindingComponent {

  // types of variables : string ,date, boolean,number
//strict variables ie you cant store any other type of data except the written
  courseName: string ="Angular";
  inputType = "checkbox" ;
  rollNumber : number = 123;
  isPresent : boolean = true;
  currentDate : Date= new Date();
  classProperty: string ="bg-primary";

  //whenever the above class object gets call the constructor will also get called atutomatically

  constructor(){
 this.courseName= "gagan";
  }
  changeCourseName(){
    // for two way data-binding
    this.courseName="gaganpreet";
    console.log("course name changed",this.courseName);
  }

  showAlert(message:string){
    console.log('Button clicked:', message);
    alert(message);

  }
}
