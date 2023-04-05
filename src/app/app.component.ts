import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculadora-Angular';

  num1 = 0;
  num2 = 0;
  resp = '0';
 
 

  imc() {   
    const valor = (this.num1 / ((this.num2 * this.num2) / 100));
    if (valor < 18.5) {
      this.resp = 'MAGREZA';
    } if (valor < 24.9  || valor > 18.5) {
      this.resp = 'NORMAL';
    } if (valor < 29.9 || valor > 25.0) {
      this.resp = 'SOBREPESO';
    } if (valor < 34.9 || valor > 30.0) {
      this.resp = 'OBESIDADE GRAU 1';
    } if (valor < 39.9 || valor > 35.0) {
      this.resp = 'OBESIDADE GRAU 2';
    } if (valor > 40.0){
      this.resp = 'OBESIDADE GRAU 3';
    } 
  }
}
