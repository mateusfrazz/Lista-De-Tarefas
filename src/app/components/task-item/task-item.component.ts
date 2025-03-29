import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { faFontAwesome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
   @Input () tarefa!:Tarefa;//recebendo os dados do component pai que está com o service em funcionamento 
   @Output() onDeleteTask = new EventEmitter<Tarefa>() //enviando os dados para o componente pai
   faTimes = faTimes
   
   //criando um metodo para realizar o delete
   onDelete(tarefa: Tarefa){
     this.onDeleteTask.emit(tarefa);
   }
}
