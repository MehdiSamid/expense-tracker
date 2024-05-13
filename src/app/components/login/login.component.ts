import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm! : FormGroup
  constructor(private authService : AuthService , private formBuilder : FormBuilder , private router : Router ){
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
        // alert(`Form is valid : ' + ${this.loginForm.value.username} : ${this.loginForm.value.password}`);
        this.authService.login(this.loginForm.value.username , this.loginForm.value.password  );
        this.clear();
        this.router.navigate(['addexpense']);
      }
      else {
        alert('username or password incorrect');
      }
    }
  }

