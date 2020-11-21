import { Component, OnInit } from '@angular/core';
import { SubjectDao } from 'src/app/dao/subject.dao';
import { ISubject } from 'src/app/model/subject.model';
import { MatDialog } from '@angular/material/dialog';
import { AddSubjectDialogComponent } from '../dialogs/add-subject-dialog/add-subject-dialog.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.scss']
})
export class AdminSubjectComponent implements OnInit {

  subjectList: ISubject[] = [];
  displayedColumns: string[] = ['subId', 'subName', 'subDesc', 'action'];

  constructor(private subjectDao: SubjectDao,
              private dialog: MatDialog,
              private notification: NotificationService) { }

  ngOnInit() {
    this.fetchSubjects();
  }

  fetchSubjects(): void {
    this.subjectDao.getAllSubjects().subscribe(res => {
      this.subjectList = res;
    })
  }

  update(obj) {
    this.dialog.open(AddSubjectDialogComponent, {
      width: '400px',
      data: {id: obj.subId, subName: obj.subName, subDesc: obj.subDesc , action: 'Update Subject', actionCode: 'update'}
    }).afterClosed().subscribe(result => {
      if (result) {
        this.fetchSubjects();
      }
    });
  }

  delete(obj) {
    this.subjectDao.deleteSubject(obj.subId)
    .subscribe(res => {
      this.notification.success("Subject Deleted Succesfully");
      this.fetchSubjects();
    });
  }

  addNewSubject() {
    this.dialog.open(AddSubjectDialogComponent, {
      width: '400px',
      data: {action: 'Add New Subject', actionCode: 'add'}
    }).afterClosed().subscribe(result => {
      if (result) {
        this.fetchSubjects();
      }
    });
  }

}
