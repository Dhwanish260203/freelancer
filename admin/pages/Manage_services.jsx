import axios from 'axios';
import React, { useState, useEffect } from 'react'


function Manage_services() {


    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteid = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        //console.log(res);
        fetch();
    }

    return (
        <div>
            <section id="main-content">
                <section className="wrapper">
                    <h3><i className="fa fa-angle-right" /> Manage Services</h3>

                    <div className="row mt">
                        <div className="col-md-12">
                            <div className="content-panel">
                                <h4><i className="fa fa-angle-right" /> Manage Services</h4><hr /><table className="table table-striped table-advance table-hover">
                                    <thead>
                                        <tr>
                                            <th><i className="fa fa-bullhorn" /> ID</th>
                                            <th>Categories</th>
                                            <th>Image </th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th><i className=" fa fa-edit" /> Action</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((value,index,arr) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value.id}</td>
                                                        <td>{value.cate_id}</td>
                                                        <td><img src={value.img} width="50px" alt="" /></td>    
                                                        <td>{value.name}</td>
                                                        <td>{value.desc}</td>
                                                        <td>{value.price}</td>
                                                
                                                        <td>
                                                            <button className="btn btn-success btn-xs"><i className="fa fa-check" /></button>
                                                            <button className="btn btn-primary btn-xs"><i className="fa fa-pencil" /></button>
                                                            <button className="btn btn-danger btn-xs"><i className="fa fa-trash-o "  onClick={()=>deleteid(value.id)} /></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }



                                    </tbody>
                                </table>
                            </div>{/* /content-panel */}
                        </div>{/* /col-md-12 */}
                    </div>{/* /row */}
                </section>{/* --/wrapper --*/}
            </section>{/* /MAIN CONTENT */}
        </div>

    )
}

export default Manage_services