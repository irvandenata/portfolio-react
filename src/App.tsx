import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import {DetailArticle} from './pages/blog/detail-article';
import {SearchArticle} from './pages/blog/search-article';

const App = ()=> {

  return (
        <>
            <Routes>
                <Route index  element={<Home />}  />
                <Route path="/blog" element={<SearchArticle />} /> 
                <Route path="/detail" element={<DetailArticle />} />
            </Routes>
        </>
  )
}

export default App;
