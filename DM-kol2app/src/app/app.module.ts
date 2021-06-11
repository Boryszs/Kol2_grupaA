import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { DMDataService } from './services/dm-data.service';
import { OrdersDMComponent } from './components/orders-dm/orders-dm.component';
import { OrdersItemDMComponent } from './components/orders-item-dm/orders-item-dm.component';
import { OrdersDetailsDMComponent } from './components/orders-details-dm/orders-details-dm.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersDMComponent,
    OrdersItemDMComponent,
    OrdersDetailsDMComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DMDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
