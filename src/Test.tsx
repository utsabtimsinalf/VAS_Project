
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }
import { Button } from 'antd';
import React, { Component } from 'react'
import './App.css';


type Props = {}

type State = {
  name: string,
  count: number,
}

export default class Test extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Hot reloading is active',
      count: 0,
    }
  }
  updateCount = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    })
    );
    // this.setState({
    //   ...this.state,
    //   count: this.state.count+1
    // });
  }
  render() {
    return (
      <div className='counter'>
        <span className='counter'>{this.state.count}</span>
        <Button> Click Me</Button>
        {/* <Hello name={this.state.name} /> */}
        <button onClick={()=>this.updateCount}>Add</button>
      </div>
    )
  }
}

