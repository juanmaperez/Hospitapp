import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(
    private router: Router,
    public _title: Title,
    public _meta: Meta,
  ) {
    this.getDataRoute()
    .subscribe((data) => {
      this.label = data.title;
      this._title.setTitle( data.title );
      const metaTag: MetaDefinition = {
        name: 'description',
        content: data.title
      };
      this._meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events
    .filter(event => event instanceof ActivationEnd)
    .filter((event: ActivationEnd) => event.snapshot.firstChild === null)
    .map((event: ActivationEnd) => event.snapshot.data);
  }
}
