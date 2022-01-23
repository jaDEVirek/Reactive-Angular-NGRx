export class Store {
  private subscribers: Function[]
  private reducers: { [key: string]: Function }
  private state: { [key: string]: any }

  constructor(reducer = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  dispatch(action: any) {
    console.log(action);

    this.state = {
      ...this.state, data: [
        ...this.state.data , action.searchItem
      ],
    }
  }
}
