import React from "react";
import { useState } from "react";


function App() {
  const [result, setResult] = useState("");

  return (
    <div className="App">
     <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
     </div>
    </div>
  );
}

export default App;
