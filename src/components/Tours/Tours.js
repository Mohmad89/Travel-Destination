import './Tours.css'
import Tour from './tour/Tour'
import { Link } from 'react-router-dom'
function Tours (info){
    return (
        <>
            {info.data.map(val => {
                return (
                    <Link to= {`/city/${val.id}`}><Tour data = {val}/></Link>
                )
            })}
        
        </>
    );
}

export default Tours;