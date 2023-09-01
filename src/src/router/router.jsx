import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home'
import Hobbies from '../views/Hobbies'

export default function ViewRouter() {
    return (
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Hobbies" Component={Hobbies} />
      </Routes>
    );
  }