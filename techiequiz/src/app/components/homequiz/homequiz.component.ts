import { Component, OnInit } from '@angular/core';
import { SubjectDao, SubjectResponse } from 'src/app/dao/subject.dao';

@Component({
  selector: 'app-homequiz',
  templateUrl: './homequiz.component.html',
  styleUrls: ['./homequiz.component.scss']
})
export class HomequizComponent implements OnInit {

  subjects: SubjectResponse[];

  constructor(private subjectDao: SubjectDao) { }

  ngOnInit() {
    this.subjectDao.getAllSubjects().subscribe((res) => {
      this.subjects = res;
      console.log(res);
    });
  }

}
