import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'questionlist', component: QuestionComponent},
  {path : 'question/:quiz.id', component : QuizQuestionComponent},
  {path : 'quiz', component : HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    QuizQuestionComponent,
    QuestionComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
