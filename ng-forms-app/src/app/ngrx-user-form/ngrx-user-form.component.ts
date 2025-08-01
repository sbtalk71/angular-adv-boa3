import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserFormState } from '../store/userform.reducers';
import { emailSelector, nameSelector } from '../store/userform.selectors';
import { updateName } from '../store/userform.actions';

@Component({
  selector: 'app-ngrx-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './ngrx-user-form.component.html',
  styleUrl: './ngrx-user-form.component.css'
})
export class NgrxUserFormComponent implements OnInit {

  userform!: FormGroup;
 
  username$!:Observable<string>;
  email$!:Observable<string>;

  constructor(private fb: FormBuilder, private store:Store<{userForm:UserFormState}>) {
this.username$=this.store.select(nameSelector);
this.email$=this.store.select(emailSelector);
  }
  ngOnInit(): void {
    this.userform = this.fb.group({
      username: [''],
      email: ['']
    });

    this.username$.subscribe(username=>{this.userform.get('username')?.setValue(username)});
    this.username$.subscribe(email=>{this.userform.get('email')?.setValue(email)});

    this.userform.get('username')?.valueChanges.subscribe(username=>{this.store.dispatch(updateName(username))});
    this.userform.get('email')?.valueChanges.subscribe(email=>{console.log("email set to store");this.store.dispatch(updateName(email))});

  }

  handleSubmit(){

  }

  
}
