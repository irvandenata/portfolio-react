import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import DetailArticle from './pages/blog/detail-article';
import SearchArticle from './pages/blog/search-article';
import {AnimatePresence} from 'framer-motion'

const App = ()=> {

  return (
        <>
        <AnimatePresence mode="wait">
            <Routes>
                <Route index  element={<Home />}  />
                <Route path="/blog" element={<SearchArticle />} /> 
                <Route path="/blog/:slug" element={<DetailArticle />} />
            </Routes>
        </AnimatePresence>
        </>
  )
}

export default App;
