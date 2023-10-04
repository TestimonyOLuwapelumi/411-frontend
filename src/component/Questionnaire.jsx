// src/Questionnaire.js
import React, { useState, useEffect } from 'react';
import api from './Api';


const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    api.get('/questions')
      .then(response => setQuestions(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [questionId]: optionId,
    }));
  };

// src/Questionnaire.js
// ... (previous code)

const handleSubmit = async e => {
    e.preventDefault();
  
    try {
      const response = await api.post('/responses', { answers: selectedOptions });
      console.log(response.data.data);
  
      // Send email using server-side logic
      await api.post('/send-email', {
        to: 'adeoyetestimony2@gmail.com',
        subject: 'Questionnaire Response',
        text: JSON.stringify(selectedOptions, null, 2),
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  // ... (rest of the code)
  

  return (
    <div>
      <h1>Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {questions.map(question => (
          <div key={question.id}>
            <h3>{question.title}</h3>
            {question.options.map(option => (
              <label key={option.id}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  onChange={() => handleOptionChange(question.id, option.id)}
                />
                {option.text}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Questionnaire;
