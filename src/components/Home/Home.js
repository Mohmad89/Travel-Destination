import Header from '../Header/Header'
import Tours from '../Tours/Tours'
import Footer from '../Footer/Footer'
import data from '../../data/data.json'
import './Home.css'

function Home (){
    return (
        <>
            <Header/>
            <Tours data = {data}/>
            <Footer/>
        </>
    )
}

export default Home;