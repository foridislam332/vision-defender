import React from 'react';
import { Button } from 'react-bootstrap';
import './MoreService.css'

const MoreService = () => {
    return (
        <div className="more_service_container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="more_service_box">
                            <div className="image">
                                <img src="https://i.ibb.co/GvZRRg3/icon.png" alt="" />
                            </div>
                            <div className="more_service_content">
                                <h3>INTERIOR WORK</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                            </div>
                            <Button className="more_btn">Learn More</Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="more_service_box" style={{ background: '#244523 !importent' }}>
                            <div className="image">
                                <img src="https://i.ibb.co/xsyks8q/icon.png" alt="" />
                            </div>
                            <div className="more_service_content">
                                <h3>BODY WORK</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                            </div>
                            <Button className="more_btn">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreService;