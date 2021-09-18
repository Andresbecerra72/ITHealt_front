import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from './models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url: string = 'http://localhost:21864/api/pacientes';



  constructor(private http: HttpClient) { }


  // ---------Servicios-------------

  // ==========================================================================
//             +++++++++++ MOSTRAR PACIENTES: GET ++++++++++++++
// ==========================================================================

obtenerPacientes() {

  return this.http.get( this.url );

}




// ==========================================================================
//             +++++++++++ CREAR PACIENTE: POST ++++++++++++++
// ==========================================================================

guardandoPaciente( paciente: Paciente){


const headers = new HttpHeaders().set('content-type', 'application/json');

  return this.http.post( this.url, paciente, {headers} )
                  .pipe(
                  map( (resp: any) => {

                    // console.log(resp);
                    return resp;
                  })
                  );


}



}
