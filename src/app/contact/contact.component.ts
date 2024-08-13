import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestComponent } from "../test/test.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TestComponent, FormsModule, CommonModule, FooterComponent],
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
