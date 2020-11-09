import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/model/budget/budget-item';

@Component({
  selector: 'app-addtobudget',
  templateUrl: './addtobudget.component.html',
  styleUrls: ['./addtobudget.component.scss']
})
export class AddtobudgetComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('',null);
  @Output() submitForm: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.submitForm.emit(form.value);
    form.reset();
  }

}
