import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';

@Component({
    selector: 'app-nav',
    imports: [
        MatIcon,
        MatToolbar,
        MatIconButton
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {

}
