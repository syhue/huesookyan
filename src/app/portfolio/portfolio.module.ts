import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { IntroComponent } from './components/intro/intro.component';


@NgModule({
    declarations: [
        PortfolioComponent,
        IntroComponent
    ],
    imports: [
        CommonModule,
        PortfolioRoutingModule
    ]
})
export class PortfolioModule { }
