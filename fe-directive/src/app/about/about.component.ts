import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
public btn=false;
public isLogin=false;
public dataValue=false;
public btn_select = false;
public employee : any[] = [
  { "Id": 1,"First": "Mark", "Last": "Otto","Handle":"mdo" },
  { "Id": 2,"First": "Jacob", "Last": "Thornton","Handle":"	fat" }, 
  { "Id": 3,"First": "Larry", "Last": "the Bird","Handle":"	twitter" },];
change():void{
  this.dataValue =!this.dataValue;
  console.log(this.dataValue);
  
}
asIsOrder(a: any, b: any) {
  return 1;
}
select():void{
  this.btn_select =!this.btn_select;
  console.log(this.btn_select);
}
}
