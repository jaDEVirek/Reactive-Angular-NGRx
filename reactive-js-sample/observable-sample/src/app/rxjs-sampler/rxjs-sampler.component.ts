import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {filter, fromEvent, interval, map, of, pipe, take} from "rxjs";

@Component({
  selector: 'app-rxjs-sampler',
  templateUrl: './rxjs-sampler.component.html',
  styleUrls: ['./rxjs-sampler.component.css']
})
export class RxjsSamplerComponent implements OnInit {

  observer: any
  @ViewChild('somebuttom', {read: ElementRef})
  private butt: ElementRef

  constructor() {
    this.operatorExamples()
  }

  ngOnInit(): void {
    this.observer = {
      next: (val: any) => {
        console.log(val)
      },
      error: (error: any) => {
        console.log(error)
      },
      completed: () => {
        console.log("Comepleted")
      }
    }
  }

  ngAfterViewChecked() {
   // console.log(this.butt)
  //  fromEvent(this.butt.nativeElement, 'click').subscribe(this.observer);
 //   console.log('Waiting...')
 //   setTimeout( () => this.operatorExamples(),5000)

  }


  operatorExamples() {
    // const numbers = interval(10);
    const takeFourNumbers = of(1,2,3,4,5).pipe(filter(x=> x > 3), map(x=> x*10) );
    console.log(takeFourNumbers.subscribe((x)=>console.log(x)))
  //  takeFourNumbers.subscribe(x => console.log('Next: ', x));
  }
}
