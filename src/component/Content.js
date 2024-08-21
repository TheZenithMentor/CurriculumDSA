// src/Content.js
import React from 'react';

const Content = ({ module }) => {
    return (
        <div className="col-md-8 content">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{module.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Duration: {module.duration}</h6>
                    <ul className="list-group list-group-flush">
                        {module.topics.map((topic, index) => (
                            <li key={index} className="list-group-item">{topic}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Content;
