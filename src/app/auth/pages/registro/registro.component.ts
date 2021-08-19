import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,30}$";
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";

  email: string = '';
  passwd: string = '';
  user: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  registrarUser() {
  }

}
