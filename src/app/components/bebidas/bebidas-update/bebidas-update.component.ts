import { Bebidas } from '../bebidas.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BebidasService } from '../bebidas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bebidas-update',
  templateUrl: './bebidas-update.component.html',
  styleUrls: ['./bebidas-update.component.css']
})
export class BebidasUpdateComponent implements OnInit {
    
  bebidas!: Bebidas;
  

  constructor(
    private bebidasService: BebidasService, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

  const id = +this.route.snapshot.paramMap.get('id')!;
    this.bebidasService.readById(id).subscribe((bebidas)=> {
     this.bebidas = bebidas;
     console.log("bebidas", bebidas)
    });


  }
  
  
  updateBebidas():void{
   this.bebidasService.update(this.bebidas).subscribe (() => {
      this.bebidasService.showMessage('Bebida atualizado com Sucesso!')
      this.router.navigate(["/bebidas"]);
    })

  }
  cancel(): void{
  this.router.navigate(["/bebidas"]);

  }

}