import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:any;


  constructor(private dataservice:DataService, private itemRoute: ActivatedRoute) { }

  ngOnInit(){
    this.getItem();
  }

  getItem(){
    const routeParams = this.itemRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    
    // Find the product that correspond with the id provided in route.
    this.dataservice.getItem(productIdFromRoute).subscribe((data:any[]) =>{
          this.product = data
    });
  }

  addToCart(){
    alert('Product Added to Cart')
  }

}
