import './App.css';
import Nav from './components/Nav.js';
import Home from './pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Games from './components/Games'
import GameStreams from './components/TopStreams/GameStreams';
import CommentParentComponent from './pages/Comments Page/CommentParentComponent';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
    <Router>
    <Nav/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/Comments' component={CommentParentComponent}/>
      <Route exact path ='/Games' component={Games}/>
      <Route exact path='/Streams' component={GameStreams}/>
    </Router>
    </div>
  );
}

export default App;
