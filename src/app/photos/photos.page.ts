import {Component, OnInit, ViewChild} from '@angular/core';
import {PhotoService} from '../photo.service';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  @ViewChild(IonInfiniteScroll) ionInfineScrole: IonInfiniteScroll
photos;
skip = 0;
limit = 2;
  constructor(
      private photoService: PhotoService
  ) { }

  ngOnInit() {
      this.getPhotos();
  }
  getPhotos() {
    this.photoService.getPhotos({
        _start: this.skip,
        _limit: this.limit
    }).subscribe((res: any) => {
        this.photos = res;
        console.log(res);
    });
  }
getMorePhotos() {
    this.skip += 2;
    this.photoService.getPhotos({
        _start: this.skip,
        _limit: this.limit
    }).subscribe((res: any) => {
        this.photos.push(...res);
        console.log(res);
        this.ionInfineScrole.complete();
    });
  }
}
