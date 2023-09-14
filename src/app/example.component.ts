import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent implements OnInit {
  manual = false;
  automatico = false;
  constructor(private fb: FormBuilder) {}

  evaluacionPracticaOperacion = this.fb.group({
    Hora_Inicial_Sesion: ['', Validators.required],
    Hora_Final_Sesion: ['', Validators.required],
  });

  ngOnInit() {
    this.evaluacionPracticaOperacion.controls.Hora_Inicial_Sesion.setValue(
      '00:00'
    );
    this.evaluacionPracticaOperacion.controls.Hora_Final_Sesion.setValue(
      '00:00'
    );
    // new Date().toLocaleTimeString()
    // new Date().toLocaleTimeString('en-GB', { hour12: true })
  }

  calcula_Horas(event: any) {
    console.log(event.value);
    console.log(this.evaluacionPracticaOperacion.value);
  }

  mostrarHoras(modoRegistroHoras: string) {
    if (modoRegistroHoras == 'Manual') {
      this.manual = true;
      this.automatico = false;
      this.evaluacionPracticaOperacion.controls.Hora_Inicial_Sesion.setValue(
        '00:00'
      );
      this.evaluacionPracticaOperacion.controls.Hora_Inicial_Sesion.enable();
    } else {
      this.manual = false;
      this.automatico = true;
      this.evaluacionPracticaOperacion.controls.Hora_Inicial_Sesion.setValue(
        '00:00'
      );
      this.evaluacionPracticaOperacion.controls.Hora_Inicial_Sesion.disable();
    }
  }

  registrarEvaluacion() {
    console.log(this.evaluacionPracticaOperacion.value);
  }
}
