import "./TourDet.css";
import { useState } from 'react';
import { useParams } from "react-router-dom";
function TourDet(info) {

    const [readMore, setReadMore] = useState(false);

    const { id } = useParams();
    const val = info.data.filter((value) => value.id === id);
    console.log(val);
    return (
        <>
            return (
            <section className="city">
                <div className="container">
                    <div className="card">
                        <img src={val[0].image} alt={val[0].name} />
                        <div className="content">
                            <p className="name">{val[0].name}</p>
                            <p className="id">{val[0].id}</p>
                            <p className="info">

                                {readMore ? val[0].info : val[0].info.substring(0, 300)}

                                <button onClick={() => setReadMore(!readMore)} className="btn">
                                    {readMore ? "Show less" : "Show more"}
                                </button>
                            </p>
                            <p className="price">$ {val[0].price}</p>
                        </div>
                    </div>
                </div>
            </section>
            );
        </>
    );
}

export default TourDet;
