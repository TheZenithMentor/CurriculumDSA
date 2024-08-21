// src/components/Sidebar.js
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
        <span className={`collapse-icon ${collapsed ? 'rotate' : ''}`}>&#9664;</span>
      </button>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="/">Syllabus</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/questions">DSA Questions</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
