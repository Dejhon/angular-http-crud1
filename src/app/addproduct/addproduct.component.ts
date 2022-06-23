import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private dataservice: DataService, private route:Router) { }

  submitted = false

  Items = new FormGroup({
    itemName: new FormControl('',Validators.required),
    itemDescription: new FormControl('', Validators.required),
    itemPrice: new FormControl('', Validators.required),
    itemUrl : new FormControl('', Validators.required),
    itemQuantity: new FormControl('', Validators.required)
  })

  get itemName(){
    return this.Items.get('itemName')
  }

  get itemDescription(){
    return this.Items.get('itemDescription')
  }

  get itemPrice(){
    return this.Items.get('itemPrice')
  }

  get itemUrl(){
    return this.Items.get('itemUrl')
  }

  get itemQuantity(){
    return this.Items.get('itemQuantity')
  }


  onSubmit(){
    this.submitted = true;
    if(this.Items.valid && this.submitted == true){
  
      const data ={
        name: this.itemName?.value,
        description: this.itemDescription?.value,
        price: this.itemPrice?.value,
        url: this.itemUrl?.value,
        quantity: this.itemQuantity?.value
      }
  
      const itemInfo = new FormData()
        itemInfo.append('name',data.name);
        itemInfo.append('description',data.description);
        itemInfo.append('price',data.price);
        itemInfo.append('url',data.url);
        itemInfo.append('quantity',data.quantity);
  
          this.dataservice.additem(itemInfo).subscribe({
            next:(res: any)=>{
              alert('Sign up successful');
              this.route.navigate(['/'])
            },
            error:()=>{
              alert('Error While Adding product')
            }
          })
        }
  }

  ngOnInit(): void {
  }

}
