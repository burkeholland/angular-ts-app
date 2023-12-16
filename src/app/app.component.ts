import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  deleteTodo(_t20: { title: string; completed: boolean; }) {
    throw new Error('Method not implemented.');
  }

  title = 'angular-ts-app';

  todos: { title: string, completed: boolean }[] = [
    { title: 'Finish homework', completed: false },
    { title: 'Go grocery shopping', completed: true },
    { title: 'Call mom', completed: false },
    { title: 'Exercise for 30 minutes', completed: false }
  ];
  todoText: any;

  // add a todo
  addTodo() {
    this.todos.push({ title: this.todoText, completed: false });
    // clear out the input
    this.todoText = '';
  }
}
