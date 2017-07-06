import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title : string;
  name  : string;
  lastname : string;
  submitted : boolean = false;

  /*Method to display the title*/
  showTitle(FirstName : string, LastName : string){
  		this.submitted = true;
  		this.title = `${FirstName} ${LastName}`;
  }
}
