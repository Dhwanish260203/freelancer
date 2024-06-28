import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Service() {

    const redirect=useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res);
        setData(res.data);
    }
    return (
        <div>
            <section className="service_section layout_padding">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2> Our Services </h2>
                    </div>
                    <div className="row">
                        {
                            data.map((value, index) => {
                                return (
                                    <div key={index} className="col-sm-6 col-md-4 mx-auto">
                                        <a href="javascript:void(0)" onClick={()=>redirect('/view_service/'+value.id)}>
                                        <div className="box ">
                                            <img src={value.img} width="100%" height="200px" alt />
                                            <div className="detail-box">
                                                <h5>
                                                    {value.name}
                                                </h5>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>
        </div>

    )
}

export default Service