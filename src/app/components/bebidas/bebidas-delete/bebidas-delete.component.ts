import { BebidasService } from '../bebidas.service';
import { Bebidas } from '../bebidas.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bebidas-delete',
  templateUrl: './bebidas-delete.component.html',
  styleUrls: ['./bebidas-delete.component.css']
})
export class BebidasDeleteComponent implements OnInit {

  bebidas!: Bebidas
  constructor(private bebidasService: BebidasService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = +this.route.snapshot.paramMap.get('id')!;      
    this.bebidasService.readById(id).subscribe((bebidas)=> {
      this.bebidas= bebidas;
      
    });
  }
  deleteBebida(): void {
    this.bebidasService.delete(this.bebidas.id!).subscribe(() =>{
      this.bebidasService.showMessage('Produto excluido com sucesso')
      this.router.navigate(['/bebidas']);

    });

  }

  cancel(): void {
    this.router.navigate(['/bebidas']);
  }
}
