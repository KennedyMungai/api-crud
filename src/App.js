import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserPost from './UserPost';


function App()
{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserPost />} />
      </Routes>
    </div>
  );
}

export default App;
