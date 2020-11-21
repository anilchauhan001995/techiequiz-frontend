import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISubjectDialog, ISubject } from 'src/app/model/subject.model';
import { SubjectDao } from 'src/app/dao/subject.dao';

@Component({
  selector: 'app-add-subject-dialog',
  templateUrl: './add-subject-dialog.component.html',
  styleUrls: ['./add-subject-dialog.component.scss']
})
export class AddSubjectDialogComponent implements OnInit {

  subName: string;
  subDesc: string;

  constructor(public dialogRef: MatDialogRef<AddSubjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISubjectDialog,
    private subjectdao: SubjectDao) { }

    get isAddMode(): boolean {
      return this.data.actionCode === 'add';
    }

  ngOnInit() {
    if (!this.isAddMode) {
      this.subName = this.data.subName;
      this.subDesc = this.data.subDesc;
    }
  }

  addSubject() {
    this.subjectdao.addSubject(this.subName, this.subDesc).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

  updateSubject() {
    const sub: ISubject = {subId: this.data.id, subName: this.subName, subDesc: this.subDesc};
    this.subjectdao.updateSubject(sub).subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
