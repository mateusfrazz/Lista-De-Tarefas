import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true, // Adicione esta linha
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;
  
  onSubmit() {
    if (!this.tarefa) {
      alert('Adicione uma tarefa!');
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    };

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
    this.mostrarAddTarefa = false; // Adicione esta linha para fechar o formulário após o envio
  }

  alteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }
}