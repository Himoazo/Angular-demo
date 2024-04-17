import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversionComponent } from '../conversion/conversion.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [ConversionComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {}
