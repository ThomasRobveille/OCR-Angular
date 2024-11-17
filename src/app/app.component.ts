import { Component, OnInit } from '@angular/core';
import { SnapFaceComponent } from './snap-face/snap-face.component';
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnapFaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  mySnap!: FaceSnap
  secondSnap!: FaceSnap;
  thirdSnap!: FaceSnap

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Briol',
      'Moi-même',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,
      false
    )

    this.secondSnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,
      false
    )

    this.thirdSnap = new FaceSnap(
      'Cynthia',
      'Mon coup de coeur du moment',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,
      false
    )
  }
}

