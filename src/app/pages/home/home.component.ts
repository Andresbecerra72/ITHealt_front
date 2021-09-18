import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Paciente } from '../../models/paciente.model';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  // variables
  pacientes_arr: Paciente[] = [];
  message: string = 'Cargando Base de Datos';


  constructor(private servicesService: ServicesService) { }



  ngOnInit(): void {



   this.cargarData();


  }


//---------------------------------
cargarData(){
  this.servicesService.obtenerPacientes()
  .subscribe((resp:any) => {

    console.log('Resp from API', resp);

    if(resp.length > 0){
      this.pacientes_arr = resp;

    }else{

      this.message= 'No hay Registros';

    }

  },err => { // si falla guardando el archivo
    console.log(err);
    this.pacientes_arr = [];
    this.message= 'Server Error';
    Swal.fire(
     '¡Error!',
     'Intentalo más tarde',
     'error'
   )
  });

}



  //----------------------------------------------

  registrarPaciente(form: FormGroup){


    Swal.fire({
      title: 'Guardando Informaciòn',
      icon: 'info',
      scrollbarPadding: false,
      allowOutsideClick: false
    });
    Swal.showLoading();

    console.log(form);

    const ID = new Date().getMilliseconds();


   const paciente  = new Paciente(
      ID,
      form.controls.nombre.value,
      form.controls.apellido.value,
      form.controls.documento.value,
      form.controls.telefono.value,
      form.controls.correo.value,
      form.controls.direccion.value,
      form.controls.ciudad.value,
      form.controls.pais.value,
      new Date().toDateString(),
      new Date().toDateString()

    );

    console.log(paciente);


    // enviando al servicio
    this.servicesService.guardandoPaciente(paciente)
                        .subscribe(resp =>{
                          console.log(resp);

                          this.cargarData();

                          Swal.fire(
                            'Guardado',
                            'El Paciente fue Ingresado',
                            'success'
                          );



                        },err => { // si falla guardando el archivo
                          console.log(err);
                          Swal.fire(
                           '¡Error!',
                           'Subir el Registro',
                           'error'
                         )
                        });



  }



}
