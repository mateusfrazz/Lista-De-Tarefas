import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
       tarefas: Tarefa[] =[] //usando o OnInit para informar que é carregado no começo da pagina 

   constructor( private taskService:TaskService){} //realizando a injeção de dependencia
       ngOnInit(): void {
           this.taskService.getTasks().subscribe((dado)=>{
            this.tarefas = dado;
            console.log(dado);
           })
       }


       deleteTask(tarefa: Tarefa){
          this.taskService.deleteTask(tarefa).subscribe();
       }
}
