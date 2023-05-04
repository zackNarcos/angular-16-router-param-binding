import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomerListComponent implements OnInit {
  @Input() query?: string; // this will come from the query params
  @Input() id?: string; // this will come from the path params
  @Input() title!: string; // this will come from the data
  constructor() {}

  ngOnInit() {
    alert(this.query);
  }
}
