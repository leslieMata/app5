import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    public tech : any = [{id:1, nombre:"Laptop", marca:"Lenovo", modelo:"Ideapad", memoria:"12GB", procesador:"CORE i5", discoDuro:"256"},{id:1, nombre:"Laptop", marca:"HP", modelo:"15-DY1005", memoria:"12GB", procesador:"CORE I5", discoDuro:"512"},{id:1, nombre:"laptop", marca:"asus", modelo:"asus29", memoria:"12GB", procesador:"CORE I5", discoDuro:"256"},{id:1, nombre:"Laptop", marca:"mac", modelo:"mac23", memoria:"12GB", procesador:"mac20", discoDuro:"256"},{id:1, nombre:"laptop", marca:"HP", modelo:"HPniht", memoria:"12GB", procesador:"CORE I5", discoDuro:"256"},{id:1, nombre:"Laptop", marca:"acer", modelo:"acer2000", memoria:"12GB", procesador:"Acer4500", discoDuro:"256"},{id:1, nombre:"laptop", marca:"predator", modelo:"pedrator3000", memoria:"12GB", procesador:"predatorDalton", discoDuro:"512"},{id:1, nombre:"laptop", marca:"Hp", modelo:"hpred", memoria:"12GB", procesador:"COREi5", discoDuro:"256"}]
}
