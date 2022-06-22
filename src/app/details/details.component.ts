import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:any;  

  constructor(private dataservice:DataService) { }

  ngOnInit(){
    this.dataservice.getItem(this.product).subscribe((data:any)=>{
      this.product = data;
    })
  }

}
