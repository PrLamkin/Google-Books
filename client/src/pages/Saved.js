import React, { Component } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Jumbotron from "../components/Jumbotron";
import Savedbooks from "../components/Saved";
import API from "../utils/API";

class Saved extends Component {
  state = {
    results: [],
    error: "",
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks= () => {
    API.bookLoad()
      .then(res =>{
        console.log(res)
        this.setState({
          results: res.data
        })
        console.log(this.state.results)
       })
      .catch(err => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.bookDelete(event.target.getAttribute("id"))
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({error: "" });
        this.loadSavedBooks();
        console.log(`request succeeded`);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#E98074" }}>
        <Row>
          <Col size="lg">
            <Jumbotron>
              <h1>(REACT) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
            <Savedbooks 
            results={this.state.results}
            handleFormSubmit={this.handleFormSubmit}
            style={{ display: this.state.results.length > 0 ? 'block' : 'none' }}
            />
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;