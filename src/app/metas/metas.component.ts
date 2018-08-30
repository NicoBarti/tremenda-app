import { Component, OnInit } from '@angular/core';
import { PerfilConsumoService} from '../servicios/perfil-consumo.service'

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {

  constructor( public perfilConsumoService: PerfilConsumoService) { }

  ngOnInit() {
  console.log(this.perfilConsumoService.get_perfil_consumo())
  }

clic() {
  console.log(this.perfilConsumoService.get_perfil_consumo())

}


}
