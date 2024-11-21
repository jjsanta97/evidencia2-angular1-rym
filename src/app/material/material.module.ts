import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule, MatDialogModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatCardModule, MatDialogModule, MatButtonModule, MatIconModule
  ],
})
export class MaterialModule {}