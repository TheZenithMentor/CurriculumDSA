// src/components/TopicDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const topicDetails = {
  arrays: {
    title: 'Arrays',
    content: 'An array is a data structure that stores elements of the same type in a contiguous block of memory. Arrays are useful for storing multiple values in a single variable, and allow for efficient random access to elements using an index.',
  },
  linkedLists: {
    title: 'Linked Lists',
    content: 'A linked list is a linear data structure where each element is a separate object. Each element (or node) of a list is comprising of two items - the data and a reference to the next node.',
  },
  trees: {
    title: 'Trees',
    content: 'A tree is a hierarchical data structure consisting of nodes connected by edges. It is used to represent hierarchical relationships such as file systems or organizational structures.',
  },
  graphs: {
    title: 'Graphs',
    content: 'A graph is a collection of nodes and edges where nodes represent entities and edges represent relationships between them. Graphs can be used to model complex networks like social networks or transportation systems.',
  },
  dynamicProgramming: {
    title: 'Dynamic Programming',
    content: 'Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and storing the results of subproblems to avoid redundant computations.',
  },
  advancedGraphAlgorithms: {
    title: 'Advanced Graph Algorithms',
    content: 'Advanced graph algorithms involve complex techniques such as Dijkstra’s algorithm for shortest paths, or network flow algorithms for optimizing flow in networks.',
  },
  // Add more topics as needed...
};

const TopicDetail = () => {
  const { topic } = useParams();
  const details = topicDetails[topic] || {};

  return (
    <Container className="topic-detail">
      <h2>{details.title}</h2>
      <p>{details.content}</p>
    </Container>
  );
};

export default TopicDetail;
