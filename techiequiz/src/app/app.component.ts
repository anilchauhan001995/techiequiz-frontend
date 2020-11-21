import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'techiequiz';
  isAdminUrl: boolean;
  public config: ToasterConfig = new ToasterConfig({showCloseButton: true});

  constructor(private router: Router) {}

  get isAdminView(): boolean {
    return this.isAdminUrl;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
   ).subscribe((e: RouterEvent) => {
     this.isAdminUrl = e.url.includes("/admin");
   });
  }
  
}
