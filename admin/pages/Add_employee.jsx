import React from 'react'

function Add_employee() {
    return (
        <div>
            <section id="main-content">
                <section className="wrapper">
                    <h3><i className="fa fa-angle-right" /> Add Employees</h3>
                    {/* BASIC FORM ELELEMNTS */}
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb"><i className="fa fa-angle-right" /> Add Employees</h4>
                                <form className="form-horizontal style-form" method="get">
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Default</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Help text</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />
                                            <span className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Rounder</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control round-form" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Input focus</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="focusedInput" type="text" defaultValue="This is focused..." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Disabled</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Placeholder</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="placeholder" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 col-sm-2 control-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 col-sm-2 control-label">Static control</label>
                                        <div className="col-lg-10">
                                            <p className="form-control-static">email@example.com</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>{/* col-lg-12*/}
                    </div>{/* /row */}
                    {/* INLINE FORM ELELEMNTS */}
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb"><i className="fa fa-angle-right" /> Inline Form</h4>
                                <form className="form-inline" role="form">
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-theme">Sign in</button>
                                </form>
                            </div>{/* /form-panel */}
                        </div>{/* /col-lg-12 */}
                    </div>{/* /row */}
                    {/* INPUT MESSAGES */}
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb"><i className="fa fa-angle-right" /> Input Messages</h4>
                                <form className="form-horizontal tasi-form" method="get">
                                    <div className="form-group has-success">
                                        <label className="col-sm-2 control-label col-lg-2" htmlFor="inputSuccess">Input with success</label>
                                        <div className="col-lg-10">
                                            <input type="text" className="form-control" id="inputSuccess" />
                                        </div>
                                    </div>
                                    <div className="form-group has-warning">
                                        <label className="col-sm-2 control-label col-lg-2" htmlFor="inputWarning">Input with warning</label>
                                        <div className="col-lg-10">
                                            <input type="text" className="form-control" id="inputWarning" />
                                        </div>
                                    </div>
                                    <div className="form-group has-error">
                                        <label className="col-sm-2 control-label col-lg-2" htmlFor="inputError">Input with error</label>
                                        <div className="col-lg-10">
                                            <input type="text" className="form-control" id="inputError" />
                                        </div>
                                    </div>
                                </form>
                            </div>{/* /form-panel */}
                        </div>{/* /col-lg-12 */}
                    </div>{/* /row */}
                    {/* INPUT MESSAGES */}
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb"><i className="fa fa-angle-right" /> Checkboxes, Radios &amp; Selects</h4>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" defaultValue />
                                        Option one is this and that—be sure to include why it's great
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                                        Option one is this and that—be sure to include why it's great
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                                        Option two can be something else and selecting it will deselect option one
                                    </label>
                                </div>
                                <hr />
                                <label className="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" defaultValue="option1" /> 1
                                </label>
                                <label className="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox2" defaultValue="option2" /> 2
                                </label>
                                <label className="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox3" defaultValue="option3" /> 3
                                </label>
                                <hr />
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <br />
                                <select multiple className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>{/* /form-panel */}
                        </div>{/* /col-lg-12 */}
                        {/* CUSTOM TOGGLES */}
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb"><i className="fa fa-angle-right" /> Custom Toggles</h4>
                                <div className="row mt">
                                    <div className="col-sm-6 text-center">
                                        <input type="checkbox" defaultChecked data-toggle="switch" />
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <input type="checkbox" data-toggle="switch" />
                                    </div>
                                </div>
                                <div className="row mt">
                                    <div className="col-sm-6 text-center">
                                        <div className="switch switch-square" data-on-label="<i class=' fa fa-check'></i>" data-off-label="<i class='fa fa-times'></i>">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <div className="switch switch-square" data-on-label="<i class=' fa fa-check'></i>" data-off-label="<i class='fa fa-times'></i>">
                                            <input type="checkbox" defaultChecked />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt">
                                    <div className="col-sm-6 text-center">
                                        <input type="checkbox" disabled data-toggle="switch" />
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <input type="checkbox" defaultChecked disabled data-toggle="switch" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* /row */}
                </section>{/* --/wrapper --*/}
            </section>{/* /MAIN CONTENT */}
        </div>

    )
}

export default Add_employee