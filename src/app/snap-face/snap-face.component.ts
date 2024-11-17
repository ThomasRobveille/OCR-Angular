import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-snap-face',
  standalone: true,
  imports: [],
  templateUrl: './snap-face.component.html',
  styleUrl: './snap-face.component.scss'
})
export class SnapFaceComponent implements OnInit {
  @Input() faceSnap!: FaceSnap

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  giveLike!: boolean;
  imageURL! : string;


  ngOnInit(): void {
    this.title = "Briol";
    this.description = "Moi-même";
    this.createdAt = new Date();
    this.snaps = 5;
    this.giveLike = false;
    this.imageURL = "https://parental-control.flashget.com/wp-content/uploads/sites/3/2024/07/Overview-of-dnd-for-kids.jpg";
  }

  onSnap() {
    this.faceSnap.onSnap();
  }
}
