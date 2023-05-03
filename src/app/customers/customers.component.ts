import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomerListComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit() {
    console.log(this.title);
  }
}
