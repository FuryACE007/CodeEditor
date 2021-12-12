import React, { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <>
      <div className="pane top-pane grid grid-cols-3 gap-2 px-2 bg-gray-800 pt-10 pb-6">
        <Editor 
          language= "xml"
          displayName= "HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor 
          language= "css"
          displayName= "CSS"
          value={css}
          onChange={setCss}
        />
        <Editor 
          language= "javascript"
          displayName= "Javascript"
          value={js}
          onChange={setJs}
        />
        
      </div>
      <div className="bottom-pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
