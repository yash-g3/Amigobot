import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  badge:number=0;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getProductData().subscribe(res=>{
      this.badge=res.length;
    })
  }

}
