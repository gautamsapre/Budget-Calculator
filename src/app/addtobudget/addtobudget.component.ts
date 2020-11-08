import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addtobudget',
  templateUrl: './addtobudget.component.html',
  styleUrls: ['./addtobudget.component.scss']
})
export class AddtobudgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form);
  }

}
