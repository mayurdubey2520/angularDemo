import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {



  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef<RegisterComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public matData: any){}
  ngOnInit(): void {
    if(this.matData){
      this.registerForm.patchValue(this.matData)
    }
  }

  registerForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    mail:[''],
    mobile:[''],
    age:[20],
    state:[''],
    country:[''],
    address:[''],
    tags:[''],
    isSubscribe:['']
  })

  submit(){

    this.dialogRef.close(this.registerForm.value)

  }

}
