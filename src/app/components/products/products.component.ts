import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any=[
    {
      name:"shirt1",
      image:"assets/images/shirt1.jpg",
      price:100,
      description:"dec1"
    },
    {
      name:"shirt2",
      image:"assets/images/shirt2.jpg",
      price:200,
      description:"dec2"
    },
    {
      name:"shirt3",
      image:"assets/images/shirt3.jpg",
      price:300,
      description:"dec1"
    },
    {
      name:"pant1",
      image:"assets/images/pant1.jpg",
      price:200,
      description:"dec2"
    },
    {
      name:"pant2",
      image:"assets/images/pant2.jpg",
      price:100,
      description:"dec1"
    },
    {
      name:"pant3",
      image:"assets/images/pant3.jpg",
      price:200,
      description:"dec2"
    },
    {
      name:"shoe1",
      image:"assets/images/shoe1.jpg",
      price:200,
      description:"dec2"
    },
    {
      name:"shoe2",
      image:"assets/images/shoe2.jpg",
      price:100,
      description:"dec1"
    },
    {
      name:"shoe3",
      image:"assets/images/shoe3.jpg",
      price:200,
      description:"dec2"
    }
    

  ]


  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.productList.forEach((a:any)=>{
      Object.assign(a,{total:a.price});
    })

  }
  addToCart(item:any){
    this.data.addToCart(item);

  }

}
