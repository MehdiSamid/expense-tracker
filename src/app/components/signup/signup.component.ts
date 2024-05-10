import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { IUser } from '../../interfaces/iuser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authservice : AuthService , private formBuilder: FormBuilder){
    this.signupForm = this.formBuilder.group({
      username : new FormControl('' , Validators.required) ,
      password : new FormControl('', Validators.required) ,
    });
  }
  signupForm! : FormGroup  ;

   clear(){
    this.signupForm = this.formBuilder.group({
      username : new FormControl('') ,
      password : new FormControl('') ,
    });
   }

  SignupClick() {
    if(this.signupForm.valid){
      const userName = this.signupForm.value.username ;
      const password = this.signupForm.value.password ;

      const newUser : IUser ={
        id:0,
        username : userName,
        password : password,
      }
      this.authservice.Signup(newUser);
      console.log(newUser);
      this.clear();
    }else alert('Something wrong');

    }
}
