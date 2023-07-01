import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

    phone: number = 601111676289;
    email: string = "sook.yan.hsy@gmail.com";
    linkedinUrl: string = "https://www.linkedin.com/in/syhue/";
    tags = [
        'Curious Learner',
        'Problem Solver',
        'Challenge Conqueror',
        'Constant Growth',
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
