// your Bomb code here!

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: this.props.initialCount;
    }
  }
  
  render() {
    let response;
    if (this.state.secondsLeft === 0) {
      response = 'Boom!'
    } else {
     response = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return (response)
  }
}
