import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FinancialApprovalsComponent } from './pages/financial-approvals/financial-approvals.component';
import { DisbursalComponent } from './pages/disbursal/disbursal.component';
import { TatAnalysisComponent } from './pages/tat-analysis/tat-analysis.component';
import { TatAnalysisTablesComponent } from './pages/tat-analysis-tables/tat-analysis-tables.component';
import { TreeTableModule } from 'primeng/treetable';
import { RejectionAnalysisComponent } from './pages/rejection-analysis/rejection-analysis.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { BusinessInsightsComponent } from './pages/business-insights/business-insights.component';
import { ThreeSixtyComponent } from './pages/three-sixty/three-sixty.component';
import { ProductivityComponent } from './pages/productivity/productivity.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    FinancialApprovalsComponent,
    DisbursalComponent,
    TatAnalysisComponent,
    TatAnalysisTablesComponent,
    RejectionAnalysisComponent,
    InsightsComponent,
    BusinessInsightsComponent,
    ThreeSixtyComponent,
    ProductivityComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    FormsModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
