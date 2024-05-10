import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm! : FormGroup
  constructor(private authService : AuthService , private formBuilder : FormBuilder){
    this.loginForm = this.formBuilder.group({
      username : '',
      password : '',
    })

    }
    clear(){
      this.loginForm = this.formBuilder.group({
        username : new FormControl('') ,
        password : new FormControl('') ,
      });
     }
    LoginClick(){
      if(this.loginForm.valid){
        
        this.authService.login(this.loginForm.value.username , this.loginForm.value.password  );
        this.clear();
      }
      else {
        alert('username or password incorrect');
      }
    }
  }

