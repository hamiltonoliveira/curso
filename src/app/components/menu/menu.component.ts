import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) {}

  onSelectChange(event: any) {
    const selectedValue = event.target.value;

    if (selectedValue === '3') {
      // Redireciona para a rota do Curso
      this.router.navigate(['/curso']);
    } else if (selectedValue === '1') {
      // Redireciona para a rota de Aluno
      this.router.navigate(['/aluno']);
    } else if (selectedValue === '2') {
      // Redireciona para a rota de Professor
      this.router.navigate(['/professor']);
    }
  }
}


