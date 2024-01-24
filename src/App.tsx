import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import Blog from './pages/blog';

const App = ()=> {

  return (
        <>
            <Routes>
                <Route index  element={<Home />}  />
                <Route path="/blog" element={<Blog />} /> 
            </Routes>
        </>
  )
}

export default App;
