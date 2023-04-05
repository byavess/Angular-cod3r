import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{MatSnackBar} from'@angular/material/snack-bar';

import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Bebidas } from './bebidas.model';

@Injectable({
 providedIn: 'root'
})

 
export class BebidasService {

//baseUrl = "http://localhost:3001/bebidas";
private readonly API = "api/bebidas";
 
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg:string, isError: boolean = false) :void {
    this.snackBar.open(msg,"X",{
      duration : 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"],
      
    });
  }

create(bebidas : Bebidas): Observable <Bebidas>{
  return this.http.post<Bebidas>(this.API,bebidas).pipe(
    map((obj) => obj),
    catchError ((e) => this.errorHandler(e))
  );
}

read(): Observable<Bebidas[]>{
  return this.http.get<Bebidas[]>(this.API).pipe(
    map((obj) => obj),
    catchError ((e) => this.errorHandler(e))
  );
}
  readById( id: number) : Observable<Bebidas> {
    const url= `${this.API}/${id}`;
    return this.http.get<Bebidas>(url).pipe(
      map((obj) => obj),
      catchError ((e) => this.errorHandler(e))
    );
  }
  update(bebidas: Bebidas) : Observable<Bebidas>{
    const url= `${this.API}/${bebidas.id}`;
    return this.http.put<Bebidas>(url, bebidas).pipe(
      map((obj) => obj),
      catchError ((e) => this.errorHandler(e))
    );

  }
  delete(id: number): Observable<Bebidas>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Bebidas>(url).pipe(
      map((obj) => obj),
      catchError ((e) => this.errorHandler(e))
    );
  } 
  errorHandler(e: any):Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
  return EMPTY;
  }
}
