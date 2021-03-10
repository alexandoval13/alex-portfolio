import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-grid">
        <header className="Portfolio-header">
          <div className="header-logo">
            <h1>alex</h1>
          </div>
          <div className="header-sections">
            <div>
              <text>About</text>
            </div>
            <div>
              <text>Work</text>
            </div>
            <div>
              <text>Resume</text>
            </div>
            <div>
              <text>Contact</text>
            </div>
          </div>
          <div className="header-icons">
            <i class="icon-github icon-large"></i>
            <i class="icon-linkedin icon-large"></i>
            <i class="icon-file icon-large"></i>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
