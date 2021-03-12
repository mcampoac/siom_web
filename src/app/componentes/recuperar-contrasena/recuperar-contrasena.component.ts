import { Component, OnInit } from '@angular/core';
import { PaisInterfaces, IdentificadorInterfaces, PaisLogoInterfaces } from '../../models/models.interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css'],
  providers: [DataService]
})

export class RecuperarContrasenaComponent {

  public seleccionarPais:PaisInterfaces={id:0, nombre:'Selecciona'};
  public paises:PaisInterfaces[];
  public identificadores:IdentificadorInterfaces[];
  public paiseslogo:PaisLogoInterfaces[];

  constructor(private dataSvc: DataService){}

  ngOnInit(): void {
    this.paises = this.dataSvc.getPais();
  }

  onSelect(id:number):void{
    this.identificadores = this.dataSvc.getIdentificador().filter(item => item.paisId == id);
  }
  onSelectlogo(id:number):void{
    this.paiseslogo = this.dataSvc.getPaisLogo().filter(item => item.paisLogoId == id);
  }


}