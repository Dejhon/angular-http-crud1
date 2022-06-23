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
  products:any


  constructor(private dataservice:DataService, private itemRoute: ActivatedRoute) { }

  ngOnInit(){
    const routeParams = this.itemRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    console.log(productIdFromRoute);
    
    // Find the product that correspond with the id provided in route.
    this.product = this.dataservice.getItem(productIdFromRoute).subscribe(
      product => product.id === productIdFromRoute);
      console.log(this.product);
      
  }

  addToCart(){
    alert('Product Added to Cart')
  }

}
