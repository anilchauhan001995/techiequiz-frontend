import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-topic-dialog',
  templateUrl: './add-topic-dialog.component.html',
  styleUrls: ['./add-topic-dialog.component.scss']
})
export class AddTopicDialogComponent implements OnInit {

  topName: string;
  topDesc: string;
  constructor() { }

  ngOnInit() {
  }

}
