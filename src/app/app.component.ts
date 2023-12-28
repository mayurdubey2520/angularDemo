import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularDemo';

  constructor(private dialog:MatDialog){}
  data:any;

  openDialog(){
    this.dialog.open(RegisterComponent,{data:this.data,minWidth:'50vw'}).afterClosed().subscribe((res)=>{
      if(res){
        this.data=res
      }
    })
  }
}
