import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any = [];

  constructor(private dataservice: DataService) { }

  ngOnInit(){
    this.dataservice.sendGetRequest().subscribe((data:any[]) =>{
      this.products = data;
    })
  }

}
