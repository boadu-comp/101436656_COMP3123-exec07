import logo from './logo.svg';
import './App.css';

// Student information component using props
function StudentInfo({ studentId, studentName, college }) {
  return (
    <div className="student-info">
      <h3>{studentId}</h3>
      <h4>{studentName}</h4>
      <p>{college}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="React logo" />

        <h1>Welcome to Fullstack Development - I</h1>

        <h2>React JS Programming Week09 Lab exercise</h2>

        <StudentInfo
          studentId="101436656"
          studentName="Bakim Boadu"
          college="George Brown College, Toronto"
        />

      </header>
    </div>
  );
}

export default App;
