import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any=[];
  allProducts:any=0;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.data.getTotalAmount()
    })
  }
  removeProduct(item:any){
    this.data.removeCartData(item);
  }
  removeAllProducts(){
    this.data.removeAllCart();
  }

}
