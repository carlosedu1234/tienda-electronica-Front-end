import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/Product'

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
  styleUrls: ['./produc-list.component.css']
})
export class ProducListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[]=[];

  ngOnInit() {
 console.log(this.products)
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe(data=>{
        console.log(data)
        this.products = data.producto;
      }
      )
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProducts();
        },
        err => console.log(err)
      )
  }

}
