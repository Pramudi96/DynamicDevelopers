import React, { Component } from "react";

export  default class MainContainer extends Component {
    render() {

            return <div>

                <div className="container-fluid" align="center" style="background-color:palegreen">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="section-heading text-center ">
                                <h1 className="h-bold" style="color:black">Event planing</h1>

                            </div>


                            <table width="100%" border="0">

                                <td bgcolor="#90ee90" width="30%">

                                    <div className="col-md-3">
                                        <div className="abc">
                                            <img alt="" width="100%" src="New-Year.jpg"/></div>
                                        <a href=""><h3>New Year Festival</h3></a>
                                    </div>


                                </td>

                                <td bgcolor="#90ee90" width="30%">

                                    <div className="col-md-3">
                                        <div className="abc">
                                            <img alt="" width="100%" src="Kandy.jpg"/></div>
                                        <a href=""><h3>Esala Perahara</h3></a>
                                    </div>




                                <td bgcolor="#90ee90" width="30%">
                                    <div className="col-md-3">
                                        <div className="abc">
                                            <img alt="" width="100%" src="rafting.jpg"/></div>
                                        <a href=""><h3>White Water rafting </h3></a>






                            </table>
                            <table width="100%" border="0">


                                <td bgcolor="#90ee90" width="30%">

                                    <div className="col-md-3">
                                        <div className="col-md-3">
                                            <button id="Button" name="More">Info</button>
                                        </div>
                                        <div className="col-md-3">
                                            <button id="Button" name="More">Join</button>
                                        </div>

                                    </div>


                                </td>

                                <td bgcolor="#90ee90" width="30%">

                                    <div className="col-md-3">
                                        <div className="col-md-3">
                                            <button id="Button1" name="More">Info</button>
                                        </div>
                                        <div className="col-md-3">
                                            <button id="Button2" name="More">Join</button>
                                        </div>


                                    </div>

                                </td>

                                <td bgcolor="#90ee90" width="30%">
                                    <div className="col-md-3">
                                        <button id="Button3" name="More">Info</button>
                                    </div>
                                    <div className="col-md-3">
                                        <button id="Button4" name="More">Join</button>
                                    </div>


                                </td>
                            </table>

                            <div>
                                <tr>
                                    <p>Do you like to create an Event?</p>
                                    <button id="" name="">Sign in</button>
                                </tr>
                            </div>


</div>

        }
}

