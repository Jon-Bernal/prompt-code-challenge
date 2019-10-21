import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async fetchData(url) {
    try {
      let res = await fetch(url, {
        headers: {
          Authorization: `Token 9e70f6d0114903e346004714595e80c5c7fdc3dc`
        }
      });
      const data = await res.json();
      console.log(data);
      this.setState(prevState => ({ data: [...prevState.data, data] }));
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.fetchData(
      `https://content-staging.prompt.com/api/data/university/171100/?identifierType=iped`
    );
    this.fetchData(
      `https://content-staging.prompt.com/api/data/university/131496/?identifierType=iped`
    );
    this.fetchData(
      `https://content-staging.prompt.com/api/data/university/98765/?identifierType=iped`
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.data.length > 0
          ? this.state.data.map(uni => {
              return <h2 key={uni.name}>{uni.name}</h2>;
            })
          : `Loading...`}
      </div>
    );
  }
}

export default App;
