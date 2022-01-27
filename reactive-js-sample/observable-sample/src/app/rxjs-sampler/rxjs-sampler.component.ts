import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {filter, fromEvent, interval, map, Observable, take} from "rxjs";

@Component({
  selector: 'app-rxjs-sampler',
  templateUrl: './rxjs-sampler.component.html',
  styleUrls: ['./rxjs-sampler.component.css']
})
export class RxjsSamplerComponent implements OnInit {

  observer: any
  @ViewChild('somebuttom', {read: ElementRef})
  private butt: ElementRef
  @Output() finishedLoading: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {

  }

  ngOnInit(): void {
    this.observer = {
      next: (val: any) => {
        console.log(val)
      },
      error: (error: any) => {
        console.log(error)
      },
      complete: () => {
        console.log("Comepleted")
      }
    }
  }

  performAnAction() {
     fromEvent(this.butt.nativeElement, 'click').subscribe(this.observer);
 new Observable((observer) => {
      observer.next("nextVal");
      setTimeout(() => observer.complete(), 2000);
      observer.next("NextNext")
      observer.error("errval"); // this is finished.
    }).subscribe(this.observer).unsubscribe();


    //setTimeout(() => subscrition.unsubscribe(), 2000)
  };

  afterViewInit () {
    // you could also do this after a service call of some sort
     this.finishedLoading.emit(true);
     this.performAnAction();
  }



  operatorExamples() {
    const numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(filter(x => x > 3), map(x => x * 10), take(10));
    console.log(takeFourNumbers.subscribe((x) => console.log(x)))
  }
}

