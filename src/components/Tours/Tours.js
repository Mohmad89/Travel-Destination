import './Tours.css'

function Tours (info){
    return (
        <>
            {info.data.map (val =>{
                return (
                    <section className="city">
                        <div className="container">
                            <div className="card">
                                <img src={val.image} alt={val.name} />
                                <div className="content">
                                    <p className="name">{val.name}</p>
                                    <p className="id">{val.id}</p>
                                    <p className="info">{val.info}</p>
                                    <p className="price">$ {val.price}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                );  
            })};
        </>
    );
}

export default Tours;