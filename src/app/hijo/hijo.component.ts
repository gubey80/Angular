import { Component, Input, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //aqui se definene los atributos
  @Input("propiedadhijo") datohijo: any;
  


  constructor() { }

  ngOnInit(): void {
  }

}
