export class FaceSnap {
  
  location? : string;

  constructor(public title: string, public description: string, public imageUrl: string, public createdAt: Date, public snaps: number, public giveLike: boolean) {
  }

  onSnap(): void {
    if(this.giveLike == false){
      this.onAddSnap()
    } else {
      this.onRetireSnap()
    }
    this.giveLike = !this.giveLike
  }

  onAddSnap() {
    this.snaps++;
  }

  onRetireSnap(){
    this.snaps--
  }

  setLocation(location: string): void {
    this.location = location
  }
}
