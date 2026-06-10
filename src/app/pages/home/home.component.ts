import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeskIconsComponent } from '../../components/desk-icons/desk-icons.component';
import { TaskbarComponent } from '../../components/taskbar/taskbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DeskIconsComponent, TaskbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
