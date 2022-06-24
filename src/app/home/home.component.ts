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

  page: number = 1;
  count: number = 0;
  pageSize: number = 12;
  pageSizes: any = [5, 10, 15, 20]

  
  searchText:any;
  filterLocation:any;
  tour:any;
  filter:any="Filter By Location"

  constructor(private dataservice: DataService, private itemRouter:Router) { }

  ngOnInit(){
   this.getAllItems()
  }

  getAllItems(){
    this.dataservice.sendGetRequest().subscribe((data:any[]) =>{
      this.products = data;
    })
  }

  itemDets(id:any){
    this.itemRouter.navigate(['details/' + id]);
  }

  onPageDataChange(event: any){
    this.page = event;
    this.getAllItems();
  }

  onPageSizeChange(event: any){
    this.pageSize = event.target.value;
    this.page = 1;
    this.getAllItems();
  }
}
