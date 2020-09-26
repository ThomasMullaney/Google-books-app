import React from "react";
import { List, ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ title, subtitle, author, link, image, description, Button}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener norefferer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small"> By {author}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 md-2 sm-4">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
