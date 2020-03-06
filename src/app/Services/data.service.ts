import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loadingTextList = [
    "Loading awesomeness . . .",
    "We're about to deliver a bunch of happiness to you",
    "Waiting for an exciting life...",
    "Creativity is loading . . ."
  ];

  loadingAnimationList = [
    "ball-atom",
    "ball-elastic-dots",
    "ball-grid-beat",
    "ball-newton-cradle",
    "ball-scale-pulse",
    "ball-spin-rotate",
    "pacman"
  ];

  loadingText: any = this.randomLoadingText();
  loadingTextChange: Subject<any> = new Subject<any>();

  loadingAnimation : any = this.randomLoadingAnimation();
  loadingAnimationChange: Subject<any> = new Subject<any>();

  constructor() {
    this.loadingTextChange.subscribe((value) => {
      this.loadingText = value
    });

    this.loadingAnimationChange.subscribe((value) => {
      this.loadingAnimation = value
    });
  }

  toggleLoadingText() {
    let loadingText = this.randomLoadingText();
    this.loadingTextChange.next(loadingText);
  }

  toggleLoadingAnimation() {
    let loadingAnimation = this.randomLoadingAnimation();
    this.loadingAnimationChange.next(loadingAnimation);
  }

  randomLoadingText(){
    return this.loadingTextList[Math.floor(Math.random() * this.loadingTextList.length)];
  }

  randomLoadingAnimation(){
    return this.loadingAnimationList[Math.floor(Math.random() * this.loadingAnimationList.length)];
  }
}
