import { Component } from '@angular/core';

@Component({
  selector: 'app-snap-face',
  standalone: true,
  imports: [],
  templateUrl: './snap-face.component.html',
  styleUrl: './snap-face.component.scss'
})
export class SnapFaceComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageURL! : string;

  ngOnInit() {
    this.title = "Briol";
    this.description = "Moi-même";
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageURL = "https://parental-control.flashget.com/wp-content/uploads/sites/3/2024/07/Overview-of-dnd-for-kids.jpg"
  }
}
