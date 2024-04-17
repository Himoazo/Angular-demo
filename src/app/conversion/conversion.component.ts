import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.css'
})
export class ConversionComponent {
  footNum: number = 0;
  meterNum: number = 0;
  celNum: number = 0;
  fahrNum: number = 0;

  footToMeter(): void {
    this.meterNum = this.footNum * 0.3048;
  }

  meterToFeet(): void {
    this.footNum = this.meterNum * 3.28084;
  }

  celToFahr(): void {
    this.fahrNum = (this.celNum * 1.8) +32;
  }

  farhToCel(): void {
    this.celNum = (this.fahrNum - 32) * 5/9;
  }
}
