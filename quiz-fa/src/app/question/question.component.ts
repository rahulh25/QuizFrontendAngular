import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private api: ApiService) { }
  questions;
  ngOnInit(): void {
    this.api.getQuestions().subscribe(res => { this.questions = res; });
  }

}
