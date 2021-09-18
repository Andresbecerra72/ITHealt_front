import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
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




  return this.http.post( this.url, paciente)
                  .pipe(
                  map( (resp: any) => {

                    // console.log(resp);
                    return resp;
                  })
                  );


}



}
