export class Store {
  private subscribers: Function[]
  private reducers: { [key: string]: Function }
  private state: { [key: string]: any }

  constructor(reducer = {}, initialState = {}) {
    this.reducers = reducer;
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  dispatch(action: any) {
    // console.log(action);
    this.state = this.reduce(this.state, action);
    console.log('hi', this.state)
    // this.state = {
    //   ...this.state, data: [
    //     ...this.state.data , action.searchItem
    //   ],
    // }
  }

  private reduce(state, action) {
    const newState : {[key: string]: any } = {};
    for(const prop in this.reducers){
       newState[prop] =  this.reducers[prop](state[prop],action);
    }
    switch(action.type){
      case 'SEARCH ACTION' : {
        const newData = action.searchItem
        const news = [...state.data, newData];
        return {...state,news,}
      }
    }
    return newState;
  }
}
