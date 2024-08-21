// src/components/Questions.js
import React, { useState } from 'react';
import './Question.css';
const questionsData = [
  {
    id: 1,
    title: 'Find the Largest Element in an Array',
    description: 'Write a function to find the largest element in an array.',
    code: `function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}`,
    comments: [
      { id: 1, text: 'Consider edge cases like empty arrays.' },
      { id: 2, text: 'You can also use Math.max() function.' }
    ]
  },
  {
    id: 2,
    title: 'Reverse a String',
    description: 'Write a function to reverse a given string.',
    code: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
    comments: [
      { id: 1, text: 'Check for special characters.' },
      { id: 2, text: 'Handle empty string cases.' }
    ]
  }
];

const Questions = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = (questionId) => {
    const updatedQuestions = questionsData.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          comments: [...question.comments, { id: Date.now(), text: newComment }]
        };
      }
      return question;
    });
    // Note: In a real application, this should be updated in the state and managed properly
    console.log(updatedQuestions);
    setNewComment('');
  };

  return (
    <div className="questions">
      {questionsData.map((question) => (
        <div key={question.id} className="question-card">
          <div className="card-header" onClick={() => handleExpand(question.id)}>
            <h4>{question.title}</h4>
            <span className="expand-icon">{expandedId === question.id ? '▲' : '▼'}</span>
          </div>
          {expandedId === question.id && (
            <div className="card-body">
              <p>{question.description}</p>
              <pre><code>{question.code}</code></pre>
              <div className="comments">
                <h5>Comments:</h5>
                {question.comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <p>{comment.text}</p>
                  </div>
                ))}
                <textarea
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment..."
                />
                <button onClick={() => addComment(question.id)}>Add Comment</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
