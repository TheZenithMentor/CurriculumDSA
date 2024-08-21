// src/App.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent.js';
import Sidebar from './component/Sidebar.js';
import Syllabus from './component/Syllabus.js';
import Questions from './component/Question.js';
import TopicDetail from './component/TopicDetail.js';
import './App.css';

const App = () => {
    return (
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Syllabus />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/topic/:id" element={<TopicDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  };
  
  export default App;