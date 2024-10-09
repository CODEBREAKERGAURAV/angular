import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Calculator';
  displayValue:string='';

  onButtonClick(val:string)
  {
    this.displayValue=this.displayValue+val;
    this.title="angular";
  }
  onButtonClickclr()
  {
    this.displayValue="";
  }
  onButtonClickans()
  {
    let exp=this.displayValue;
    let result:string="";
    try{
      result=eval(this.displayValue);
      this.displayValue=result;
    }
    catch(error){
      this.displayValue="INVALID INPUT";

    }
  }

}
