import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddtobudgetComponent } from './addtobudget/addtobudget.component';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';
import { ItemCardComponent } from './budgetlist/item-card/item-card.component';
import { EditBudgetItemComponent } from './edit-budget-item/edit-budget-item.component';

import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddtobudgetComponent,
    BudgetlistComponent,
    ItemCardComponent,
    EditBudgetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
