import { Bebidas } from '../bebidas.model';
import { Component, OnInit } from '@angular/core';
import { BebidasService } from '../bebidas.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-bebidas-creat',
  templateUrl: './bebidas-creat.component.html',
  styleUrls: ['./bebidas-creat.component.css']
})
export class BebidastCreatComponent implements OnInit {

  bebidas : Bebidas = {
   
    name:'',
    price: null!
    

  }


  constructor( private bebidasService: BebidasService,
    private router: Router) { }

  ngOnInit(): void {
    
    }
    createBebidas(): void {
      this.bebidasService.create(this.bebidas).subscribe(()=> {
      this.bebidasService.showMessage('Bebida Criado')
      this.router.navigate(['/bebidas'])
      })
    }
    Cancel(): void{
      this.router.navigate(['/bebidas'])
}
}