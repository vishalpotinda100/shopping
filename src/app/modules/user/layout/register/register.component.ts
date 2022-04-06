import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.registerForm=new FormGroup({
      'name':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'username':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required,Validators.minLength(6)])
    })

  }

  onSubmit(){
    console.log(this.registerForm)
  }

}
