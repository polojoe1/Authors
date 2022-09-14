
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ShowAll from './components/ShowAll';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
    

    <Routes>
      <Route path='/' element={<ShowAll/>}/>
      <Route path='/authors/create' element={<CreateAuthor/>}/>
      <Route path='/authors/edit/:id' element={<EditAuthor/>}/>
    </Routes>
    </div>
  );
}

export default App;
