import './App.css';
import preview_image from './programmer_preview.png'

function App() {
  return (
    <div className="content" style={{backgroundColor: '#61dafb', padding: 0}}>
      <p className="title">Hey there, Iam Gaurav Lahoti, a developer.</p>
      <img src={preview_image} alt="Preview_image" className="preview" />
      <div className="languages">
      <h2 style={{marginLeft: 5, fontFamily: 'Yusei Magic', color: 'blue'}}>Languages Known:-</h2>
      <div className="languages_known">
        <li>Python</li>
        <li>C++</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Firebase Database</li>
        <li>React Native</li>
      </div>
      </div>
    </div>
  );
}

export default App;
