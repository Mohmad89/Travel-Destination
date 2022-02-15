import "./Tour.css";
// import useState from 'react';

function Tour(info) {
    // const [card, setCard] = useState(false);
    // const handelCard =() =>{
    //     setCard(!card);
    // }
    return (
        <>
            <section className="city" >
                <div className="container">
                    <div className="card" >
                        <img src={info.data.image} alt={info.data.name} />
                        <div className="content">
                            <p className="name">{info.data.name}</p>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default Tour;
