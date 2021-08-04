import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  playPause(videoFile:HTMLVideoElement, videoIcon: HTMLElement){

    if(videoFile.paused){
      videoFile.play();
      videoIcon.classList.add('ri-pause-line');
      videoIcon.classList.remove('ri-play-line');
    }
    else{
      videoFile.pause();
      videoIcon.classList.remove('ri-pause-line');
      videoIcon.classList.add('ri-play-line');

      videoFile.addEventListener('ended', function(){
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
      });
    }
  }
}
