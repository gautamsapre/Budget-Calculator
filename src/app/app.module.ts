import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddtobudgetComponent } from './addtobudget/addtobudget.component';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';
import { ItemCardComponent } from './budgetlist/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddtobudgetComponent,
    BudgetlistComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
