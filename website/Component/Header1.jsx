import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header1() {

  const redirect = useNavigate();

  const userlogout = () => {
    localStorage.removeItem('uname');
    localStorage.removeItem('userid');
    toast.success('Logout Succes');
    redirect('/');

  }

  return (
    <div>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="contact_nav">
                <a href>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>
                    Call : +01 123455678990
                  </span>
                </a>
                <a href>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>
                    Email : demo@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <NavLink className="navbar-brand" to="/">
                  <span>
                    Inance
                  </span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about"> About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    </li>
                    {(() => {
                      if (localStorage.getItem('uname')) {
                        return (
                          <>
                            <li className="nav-item">
                              <a className="nav-link" href="javascript:void(0)" onClick={userlogout}>Logout</a>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/profile">
                                <i className='fa fa-user'> hi.. {localStorage.getItem('uname')} / MyAccout</i>
                              </NavLink>
                            </li>
                          </>
                        )
                      }
                      else {
                        return (
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                          </li>
                        )
                      }
                    })()}

                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section ">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="detail-box">
                  <h1>
                    Repair and <br />
                    Maintenance <br />
                    Services
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
                  </p>
                  <a href>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="images/slider-img.png" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    </div>

  )
}

export default Header1