import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rym-character-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rym-character-dialog.component.html',
  styleUrl: './rym-character-dialog.component.css'
})
export class RymCharacterDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
