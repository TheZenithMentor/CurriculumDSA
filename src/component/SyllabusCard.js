// src/components/SyllabusCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SyllabusCard = ({ title, content, link }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link to={`/topic/${link}`} className="btn btn-primary">
          Learn More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SyllabusCard;
