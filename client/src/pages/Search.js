import React, { Component } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Jumbotron from "../components/Jumbotron";
import Searchbox from "../components/Searchbox";
import Results from "../components/Results";
import Alert from "../components/Alert";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    add: null
  };

  componentDidUpdate(){
    setTimeout(() => this.setState({add: null}), 5000);
  }
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleBookSave = (event) => {
    event.preventDefault();
    API.bookSave({
      title: event.target.getAttribute("title"),
      description: event.target.getAttribute("desc"),
      authors: event.target.getAttribute("authors"),
      image: event.target.getAttribute("image"),
      link: event.target.getAttribute("link"),
    })
    .then((res) =>{
      console.log(res);
      if(res.data._id){
        this.setState({ add: true })
      }
    })
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.bookSearch(this.state.search.split(" ").join("+"))
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
        this.setState({ search: "" });
        console.log(`request succeeded`);
        console.log(res.data.items);
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
          </Col>
        </Row>
        <Row>
          <Col size="lg">
            <Searchbox
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              search={this.state.search}
            />
          </Col>
        </Row>
        <Row>
          <Col size="lg">
            <Alert style={{ opacity: this.state.add ? 1 : 0 }} type="success">
              Book Added!
            </Alert>
            <Results
              results={this.state.results}
              handleBookSave={this.handleBookSave}
              style={{
                display: this.state.results.length > 0 ? "block" : "none",
              }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;