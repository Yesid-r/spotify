import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover:'https://cdns-images.dzcdn.net/images/cover/22abb990857654105f908a558ea78bc1/350x350.jpg',
    album:'Kiss',
    name:'I Was Made For Lovin You',
    url:"http://localhost/trac.mpr",
    _id:1


  }

  constructor() { }

  ngOnInit(): void {
  }

}
