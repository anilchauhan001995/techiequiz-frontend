import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTopicDialogComponent } from '../dialogs/add-topic-dialog/add-topic-dialog.component';

@Component({
  selector: 'app-admin-topic',
  templateUrl: './admin-topic.component.html',
  styleUrls: ['./admin-topic.component.scss']
})
export class AdminTopicComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addTopicDialog() {
    this.dialog.open(AddTopicDialogComponent, {
      width: '400px'
    }).afterClosed().subscribe(result => {
      if (result) {
        //this.fetchSubjects();
      }
    });;
  }

}
