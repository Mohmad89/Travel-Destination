import Header from '../Header/Header'
import Tours from '../Tours/Tours'
import Footer from '../Footer/Footer'
import TourDet from '../TourDetailes/TourDet'
import { Routes, Route } from 'react-router-dom';
import data from '../../data/data.json'
import './Home.css'

function Home (){
    return (
        <>
        <Header/>
            <Routes>
                <Route path='/' element={<Tours data={data} />} />
                <Route path='/city/:id' element={<TourDet data={data} />} />
            </Routes>
        <Footer/>
        </>
    )
}

export default Home;