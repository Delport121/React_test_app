// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.tsx

import React from 'react';
import Dashboard from './components/Dashboard'; // Update the path
import './App.css'; // Keep the standard styling import

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Render our new Dashboard component */}
        <Dashboard /> 
      </header>
    </div>
  );
}

export default App;