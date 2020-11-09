import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/model/budget/budget-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[]= new Array<BudgetItem>();
  RemainingBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addtoBudget(item: BudgetItem){
    this.budgetItems.push(item);
    this.RemainingBudget+=item.amount;
  }
  deleteItem(item: BudgetItem){
    this.budgetItems.splice(this.budgetItems.indexOf(item),1)
    this.RemainingBudget-=item.amount;
  }
}
