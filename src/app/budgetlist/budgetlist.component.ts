import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/model/budget/budget-item';
import { EditBudgetItemComponent } from '../edit-budget-item/edit-budget-item.component';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrls: ['./budgetlist.component.scss']
})
export class BudgetlistComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete : EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onDelButtonClick(item: BudgetItem){
    this.delete.emit(item);

  }
  onItemClicked(item: BudgetItem){
    const dialRef = this.dialog.open(EditBudgetItemComponent, {
      width: '580px',
      data: item
    });
    dialRef.afterClosed().subscribe(result => {
      if(result){
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    })
  }

}
