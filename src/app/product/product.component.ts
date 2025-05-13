import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';


export interface Product 
{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{rate:number,count:number}
  
}




@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products:Product[]=[]
  constructor(private productService:ProductService)
  {

  }

  ngOnInit()
  {
    

    this.productService.getProducts()
    .subscribe({
      next:(value)=>{
        this.products=value;
      }
    })
  }

}
