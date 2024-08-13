import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TestComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userForm:any;


  constructor(public formbuilder:FormBuilder){

  }
  ngOnInit(){
    this.userForm = this.formbuilder.group({
      name: [null],
      email: [null],
      message: [null],
    });
  }

  onSubmit(){
    console.log("Form Submitted",this.userForm.value);

  }
}
