import { NewServiceService } from './new-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewServiceService]
})
export class AppComponent {
  title = 'Angular Service';
  text:string
  constructor(private _newservice:NewServiceService){}

  ngOnInit(){
    this.text = this._newservice.dispaly();
  }
}
