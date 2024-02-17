import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>Here is the embedded Gradio application:</p>
      <iframe
        title="Gradio Application"
        src="https://f2594fc86effdfc244.gradio.live"
        width="800"
        height="600"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default App;