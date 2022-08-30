class Car extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      brand: "Opel",
      model: "Astra",
      color: "Red",
      year: 2020,
    };
  }

  changeColor() {
    this.setState({
      color: "Blue",
      model: "Corsa",
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.brand} {this.state.model}
        </h1>
        <p>selected color: {this.state.color}</p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById("root"));
