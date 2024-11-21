import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RymCharacterListComponent } from './components/rym-character-list/rym-character-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RymCharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rym-api';
}
