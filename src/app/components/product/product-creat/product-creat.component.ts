import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  product : Product = {
    id: null!,
    name:'',
    price: null!
    

  }


  constructor( private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
    }
    createProduct(): void{
      this.productService.create(this.product).subscribe(()=> {
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
      })
    }
    Cancel(): void{
      this.router.navigate(['/products'])
}
}