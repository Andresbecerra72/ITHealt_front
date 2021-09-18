import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   // variables
   @Output() DataForma: EventEmitter<FormGroup> = new EventEmitter();


   forma: FormGroup = this.fb.group({
    // es importante asociar los controles Input
    nombre:     ['', [Validators.required, Validators.minLength(1)]],
    apellido: ['', [Validators.required, Validators.minLength(1)]],
    documento:  ['', [Validators.required, Validators.minLength(1)]],
    telefono:    ['', [Validators.required, Validators.minLength(1)]],
    correo:    ['', [Validators.required, Validators.minLength(1)]],
    direccion:  ['', [Validators.required, Validators.minLength(1)]],
    ciudad:     ['', [Validators.required, Validators.minLength(1)]],
    pais:       ['', [Validators.required, Validators.minLength(1)]],


    });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  // metodos
  enviarData(){

    // console.log(this.forma.value);

    if (this.forma.invalid) { // condicion para saber si el formulario es valido
      // codigo para obtener los controles Input del formulario
      return  Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched(); // marca el input como tocado por el usuario
      });
    }

    // so todo OK

    this.DataForma.emit(this.forma);

  }





   // ----------------------
 // metodos para hacer las validaciones del Input Sincronas

get nombreNoValido() {
  return this.forma.controls.nombre.invalid && this.forma.controls.nombre.touched;
}

get apellidoNoValido() {
  return this.forma.controls.apellido.invalid && this.forma.controls.apellido.touched;
}

get documentoNoValido() {
  return this.forma.controls.documento.invalid && this.forma.controls.documento.touched;
}

get telefonoNoValido() {
  return this.forma.controls.telefono.invalid && this.forma.controls.telefono.touched;
}

get correoNoValido() {
  return this.forma.controls.correo.invalid && this.forma.controls.correo.touched;
}

get direccionNoValido() {
  return this.forma.controls.direccion.invalid && this.forma.controls.direccion.touched;
}

get ciudadNoValido() {
  return this.forma.controls.ciudad.invalid && this.forma.controls.ciudad.touched;
}

get paisNoValido() {
  return this.forma.controls.pais.invalid && this.forma.controls.pais.touched;
}



}
