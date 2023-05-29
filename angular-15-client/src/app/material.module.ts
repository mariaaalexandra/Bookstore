import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';



@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatSelectModule,
    MatSlideToggleModule, MatTabsModule, MatCardModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatSelectModule,
    MatSlideToggleModule, MatTabsModule, MatCardModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, BrowserAnimationsModule, MatDialogModule, MatListModule],
})
export class MaterialModule {

}
