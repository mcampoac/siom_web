import { Injectable } from '@angular/core';
import { PaisInterfaces, IdentificadorInterfaces, PaisLogoInterfaces } from '../models/models.interfaces';

@Injectable()

export class DataService {
  private pais : PaisInterfaces[] = [
    {
      id:1,
      nombre:'Chile'
    },
    {
      id:2,
      nombre:'Perú'
    },
    {
      id:3,
      nombre:'Ecuador'
    },
    {
      id:4,
      nombre:'México'
    },
  ]

  private identificador : IdentificadorInterfaces[] = [
    {
      paisId:1,
      identificador:'Rut'
    },
    {
      paisId:2,
      identificador:'Dni'
    },
    {
      paisId:3,
      identificador:'Ruc'
    },
    {
      paisId:4,
      identificador:'Curp'
    },
  ]

  private paisLogo : PaisLogoInterfaces[] = [
    {
      paisLogoId:1,
      ruta:'../assets/imagenes/logos/logo-siom-chile.png'
    },
    {
      paisLogoId:2,
      ruta:'../assets/imagenes/logos/logo-siom-peru.png'
    },
    {
      paisLogoId:3,
      ruta:'../assets/imagenes/logos/logo-siom-ecuador.png'
    },
    {
      paisLogoId:4,
      ruta:'../assets/imagenes/logos/logo-siom-mexico.png'
    },
  ]

  getPais(): PaisInterfaces[]{
    return this.pais;
  }
  getIdentificador(): IdentificadorInterfaces[]{
    return this.identificador;
  }
  getPaisLogo(): PaisLogoInterfaces[]{
    return this.paisLogo;
  }

}
