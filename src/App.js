import { Component } from "react";
import "./App.css";

class App extends Component {
  // We access and generate state through the constructor method
  constructor() {
    // super() just calls the underlying constructor method of any other classes that we're extending from, so in this instance our App class is extending from Component, so we need to call super() to access the underlying constructor method of Component
    super();

    // We initialize our state object with an empty object with this key/value pair. key is "name" and value is 'Colin'

    this.state = {
      name: { firstName: "Colin", lastName: "Swan" },
      company: "Google",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: "Jake", lastName: "Hamilton" },
                company: "Facebook",
              });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
