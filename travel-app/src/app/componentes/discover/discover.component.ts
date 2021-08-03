import { Component, OnInit} from '@angular/core';
import SwiperCore, { EffectCoverflow } from 'swiper';
SwiperCore.use([EffectCoverflow]);

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
