import { BebidasService } from '../bebidas.service';
import { Bebidas } from '../bebidas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas-read',
  templateUrl:'./bebidas-read.component.html',
  styleUrls: ['./bebidas-read.component.css']
})
export class bebidasReadComponent implements OnInit {
 
  bebidas: Bebidas[] = [];
  displayedColumns= ['id' , 'name' , 'price','action' ];
  constructor(private bebidasSevice: BebidasService) {}

  ngOnInit(): void {
    this.bebidasSevice.read().subscribe(bebidas =>{
      
      this.bebidas=bebidas
      
    })

  }

}
