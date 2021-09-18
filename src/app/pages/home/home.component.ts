import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.servicesService.obtenerPacientes()
    .subscribe(resp => {
      console.log(resp);

    })


  }

}
