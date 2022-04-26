import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  datos = [
    {
      id: 1,
      employee_name: "Nick",
      employee_salary: "$100.00",
      employee_age: "Developer"
    },
    {
      id: 2,
      employee_name: "Kevin",
      employee_salary: "$400.00",
      employee_age: "CTO"
    },
    {
      id: 3,
      employee_name: "Torres",
      employee_salary: "$200.00",
      employee_age: "Developer SR."
    },
    {
      id: 4,
      employee_name: "Kevin",
      employee_salary: "$400.00",
      employee_age: "CTO"
    },
    {
      id: 5,
      employee_name: "Torres",
      employee_salary: "$200.00",
      employee_age: "Developer SR."
    }

  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      autoWidth: true,
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true,
      responsive: true,
      order: [0, 'desc'],
      dom: 'Bfrtip'
    };

    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res: any) => {
      this.data = res.data;
      this.dtTrigger.next('');
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
