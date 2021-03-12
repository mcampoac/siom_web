import { Component, OnInit } from '@angular/core';

interface paisInterfaces{
  id:number;
  nombre:string;
  ruta_icon:string;
  ruta_logo:string;
}

const paisArray:paisInterfaces[]=[
  {
    id: null,
    nombre: 'Selecciona',
    ruta_icon: '',
    ruta_logo: '../assets/imagenes/logos/logo-siom.png'
  },
  {
    id: 1,
    nombre: 'Chile',
    ruta_icon: '../assets/imagenes/pais/chile.png',
    ruta_logo: '../assets/imagenes/logos/logo-siom-chile.png'
  },
  {
    id: 2,
    nombre: 'Perú',
    ruta_icon: '../assets/imagenes/pais/peru.png',
    ruta_logo: '../assets/imagenes/logos/logo-siom-peru.png'
  },
  {
    id: 3,
    nombre: 'Ecuador',
    ruta_icon: '../assets/imagenes/pais/ecuador.png',
    ruta_logo: '../assets/imagenes/logos/logo-siom-ecuador.png'
  },
  {
    id: 4,
    nombre: 'México',
    ruta_icon: '../assets/imagenes/pais/mexico.png',
    ruta_logo: '../assets/imagenes/logos/logo-siom-mexico.png'
  }
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  var_ruta_logo = "../assets/imagenes/logos/logo-siom.png";
  paises = paisArray;

  constructor() { }

  ngOnInit(): void {
  }

}
