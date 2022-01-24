import {Component} from '@angular/core';
import * as fromStore from 'src/store';


@Component({
  selector: 'app-actual-news',
  templateUrl: './actual-news.component.html',
  styleUrls: ['./actual-news.component.css']
})
export class ActualNewsComponent {
  searchData!: string;
  destroy: boolean = false;
  store: fromStore.Store
  reducers = {};

  constructor() {
    this.reducers = {
      news: fromStore.reducer,
    }
    this.store = new fromStore.Store(this.reducers,);
  }

  performAction() {
    if (this.searchData != undefined && !this.searchData.trim()) return;
    const searchItem = {news: this.searchData, destroy: false};
    console.log(searchItem);
    this.searchData = '';

    this.store.dispatch({
        type: 'SEARCH ACTION', searchItem
      }
    )
    // console.log(this.store.value)
  }

}
