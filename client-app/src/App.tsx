import React, { Component } from "react";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
export default class App extends Component {
  state = {
    values: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({ values: response.data });
    });
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any, index) => {
            return <List.Item key={index}>{value.name}</List.Item>;
          })}
        </List>
      </div>
    );
  }
}
