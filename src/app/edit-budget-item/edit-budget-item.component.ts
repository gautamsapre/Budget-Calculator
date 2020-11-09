import { Component, Inject, Input, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { BudgetItem } from 'src/shared/model/budget/budget-item';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-budget-item',
  templateUrl: './edit-budget-item.component.html',
  styleUrls: ['./edit-budget-item.component.scss']
})
export class EditBudgetItemComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EditBudgetItemComponent>, @Inject(MAT_DIALOG_DATA) public item: BudgetItem) 
  {}

  ngOnInit(): void {
  }
  onSubmitted(updatedItem: BudgetItem){
    this.dialogRef.close(updatedItem);
  }
}
