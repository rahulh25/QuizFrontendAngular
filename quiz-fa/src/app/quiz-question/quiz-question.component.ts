import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {

  question = {};
  constructor(private api: ApiService) { }

  post(question) {
    this.api.postQuestion(question);
  }
  ngOnInit(): void {
    this.api.questionSelected.subscribe(question => this.question = question);
  }

}
