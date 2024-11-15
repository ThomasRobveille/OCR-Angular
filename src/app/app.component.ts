import { Component } from '@angular/core';
import { SnapFaceComponent } from './snap-face/snap-face.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnapFaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
