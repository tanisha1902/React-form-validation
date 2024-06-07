import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './components/form-component';
import './styles.css';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="App">
      {!submittedData ? (
        <FormComponent onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <h1>Submitted Details</h1>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
