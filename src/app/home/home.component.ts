import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any = [];
  product:any;

  constructor(private dataservice: DataService, private itemRouter:Router) { }

  ngOnInit(){
    this.dataservice.sendGetRequest().subscribe((data:any[]) =>{
      this.products = data;
    })
  }

}
