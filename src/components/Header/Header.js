import './Header.css'
import Navbar from '../Navbar/Navbar'

function Header (){
    return (
        <>
        <header>
            <h1>Header</h1>
            <nav className="navigation">
                <Navbar/>
            </nav>
        </header>
        </>
    );
}

export default Header;