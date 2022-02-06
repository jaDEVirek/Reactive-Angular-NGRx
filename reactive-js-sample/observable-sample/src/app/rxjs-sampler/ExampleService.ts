import * as Rx from "rxjs";
import {map, mergeMap} from "rxjs/operators";
import {reduce} from "rxjs";




class Review {
  score:  number
  name: string
}


var obj : Review[] = [
  {score: 42, name: 'Tom'},
  {score: 76, name: 'Jerry'},
  {score: 21, name: 'Artur'},
]

Rx.of(obj).pipe( mergeMap((rev,i) => rev.values()), reduce((total,rev) =>
  total+ rev.score
,0 )).subscribe(x=> console.log(x))


of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

class Review {
  score: number;
  name: string;
}

var obj: Review[] = [
  { score: 41111112, name: 'Tom' },
  { score: 41116, name: 'Jerry' },
  { score: 411, name: 'Artur' },
];

// of(obj).pipe(
//   mergeMap((rev,i) => rev.values()),
//   tap(x=> console.log(x)),
//   reduce((total,rev) => total+ rev.score,0 ),
//    map(val=> Math.floor(val/2)))
//    .subscribe(x=> console.log(x));

//  of(obj).pipe(mergeMap((val) => val.map(e => e.score))).subscribe(x=> console.log(x));

//  var source = of(1, 2, 3).pipe(mergeMapTo(of(10)));

//  source.subscribe(x=> console.log(x));

const click$ = fromEvent(document, 'click');

of(obj)
  .pipe(
    tap(console.log),
    // mergeMap((val) => [...val]),
    // map( event => ({
    // x: event.clientX,
    // y: event.clientY,
    // })
    // pluck('score'),
    reduce(
      (total, rev: Review[]) => (total + rev.values().next().value.score) | 0,
      0
    ),
    map((result) => Math.floor(result / 4))
  )
  .subscribe(console.log);
