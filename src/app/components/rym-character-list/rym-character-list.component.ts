import { Component, OnInit } from '@angular/core';
import { RymService } from '../../services/rym.service';
import { MaterialModule } from '../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { RymCharacterDialogComponent } from '../rym-character-dialog/rym-character-dialog.component';

@Component({
  selector: 'app-rym-character-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rym-character-list.component.html',
  styleUrl: './rym-character-list.component.css',
})
export class RymCharacterListComponent implements OnInit {
  charactersList: any[] = [];

  constructor(private rymService: RymService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.rymService.getCharacters().subscribe((data: any) => {
      console.log(data);
      this.charactersList = data.results;
    });
  }

  characterDialog(character: any) {
    this.dialog.open(RymCharacterDialogComponent, {
      width: '400px',
      data: character,
    });
  }
}
