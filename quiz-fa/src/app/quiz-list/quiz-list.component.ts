import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quiz;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getQuiz().subscribe(res => { this.quiz = res; });
  }

}
