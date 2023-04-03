import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserPost from './UserPost';
import CreatePost from './UserPost/CreatePost';


function App()
{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserPost />} />
        <Route path='/createPost' element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
