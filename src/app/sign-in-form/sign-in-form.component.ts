import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EncrDecrService} from '../EncrDecrService/encr-decr-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  angForm: FormGroup;

  constructor(private EncrDecr: EncrDecrService, private fb: FormBuilder) {  
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  onClickSubmit(username, password) {
    
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', password);
    var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);
    alert('Your username is : ' + username + '\n' + 'Decypted Password is : ' + password +  '\n' + 'Your Encrypted password is: ' + encrypted);
   
    console.log('Encrypted :' + encrypted);
    console.log('Decrypted :' + decrypted);
  }

  ngOnInit() {
   
  }
}