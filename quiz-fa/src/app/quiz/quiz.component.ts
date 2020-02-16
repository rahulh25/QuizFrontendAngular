import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = {};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }

}
