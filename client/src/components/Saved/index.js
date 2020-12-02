import React from "react";
import Col from "../Col";
import Row from "../Row";
import "./style.css";

function Savedbooks(props) {
  return (
    <div
      className="card mb-2"
      id="resultsdiv" style={props.style}
    >
      <h5 className="card-header">Results</h5>
      <div className="card-body">
        {props.results.map((item, index) => (
          <Row key={item._id}>
            <Col size="lg">
            <div
      className="card my-2" listid={index} 
      style={{ backgroundColor: "#EAE7DC", border: "solid 2px #E98074"}}
    >
              <Row>
                <Col size="lg-10">
                  <div className="card-header">
                    <h5 style={{ fontWeight: "bold", color: "black" }}>
                      {item.title}
                    </h5>
                    <h3 style={{ fontWeight: "bold", color: "black" }}>
                      {item.authors}
                    </h3>
                  </div>
                </Col>
                <Col size="lg-2">
                  <Row>
                    <Col size="12">
                    <a className="btn btn-primary m-1" href={item.link} role="button" target="_blank" rel="noopener noreferrer">View</a>
                    </Col>
                  </Row>
                  <Row>
                    <Col size="12">
                    <button type="button" className="btn btn-primary m-1" id={item._id} onClick={props.handleFormSubmit}>Delete</button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col size="lg-3">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="Card cap"
                    style={{ border: "#D8C3A5 solid 2px" }}
                  />
                </Col>
                <Col size="lg-9">
                  <div
                    className="card text-center "
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#EAE7DC",
                      color: "black",
                    }}
                  >
                    <div className="card-body d-flex">
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </Col>
              </Row>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}



export default Savedbooks;