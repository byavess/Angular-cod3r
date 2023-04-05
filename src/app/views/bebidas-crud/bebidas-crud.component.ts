
import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bebidas-crud',
  templateUrl: './bebidas-crud.component.html',
  styleUrls: ['./bebidas-crud.component.css']
})
export class BebidasCrudComponent implements OnInit {



  constructor( private router : Router, private headerService: HeaderService, ) { 
    HeaderService.headerData = {
      title : 'Cadastro de Bebidas',
      icon : 'local_cafe',
      routeUrl: '/bebidas'
    }
  }


  ngOnInit(): void {
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/bebidas/create'])
  }

}
