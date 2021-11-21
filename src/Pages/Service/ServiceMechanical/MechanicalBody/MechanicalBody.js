import React from 'react';
import './MechanicalBody.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const check = <FontAwesomeIcon icon={faCheck} />

const MechanicalBody = () => {
    return (
        <div className="mechanical_body container-fluid">
            {/* engine area */}
            <div className="row">
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/c83dBcS/Group-530.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="body_content">
                        <h1>Engine</h1>
                        <div className="single_title">
                            <div className="single_text">
                                <span>01</span>
                                <p>1st Engine is complete Stripped.</p>
                            </div>
                            <div className="single_text">
                                <span>02</span>
                                <p>Block Gets Re-Sleeved back to Standard.</p>
                            </div>
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>03</span>
                                    <p>2nd Engine gets Rebuild with the Old Re-Sleeved <br /> Block and the Following new Parts:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Crank</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Pistons</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Cylinder Head</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Injectors</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Injector Pump</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Seals, Bearings and Gaskets</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Water Pump</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box parts_box_right">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Oil Pump</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Cam Belt and Pullyes</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Starter</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Alternator</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Turbo</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Aux Belt</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Aux Belt Pulleys</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* gearbox area */}
            <div className="row">
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>Gearbox</h1>
                        <div className="single_title">
                            <div className="single_text">
                                <span>01</span>
                                <p>Gearbox get Stripped to the Bare Casing</p>
                            </div>
                            <div className="single_text">
                                <span>02</span>
                                <p>Casing Get send off to get Steam Cleaned <br /> and Shot Blast</p>
                            </div>
                            <div className="single_text">
                                <span>03</span>
                                <p>After Cleaning Casing get inspected to make sure <br /> there is no defects and send of the Spay booth.</p>
                            </div>
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>04</span>
                                    <p>Gearbox Completely rebuild with new parts <br /> including the below list:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Gears</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Synchro</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Synchro Hub</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Oil Pump</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box parts_box_right">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Oil Strainer</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Bearing</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Seals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gearbox image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/3SZFzcB/Group-530.png" alt="" />
                    </div>
                </div>
            </div>
            {/* transfer case area*/}
            <div className="row">
                {/* transfer case image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/ccsPvQN/Group-530-2x.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>TRANSFER CASE</h1>
                        <div className="single_title">
                            <div className="single_text">
                                <span>01</span>
                                <p>Transfer Case get Stripped to the Bare Casing</p>
                            </div>
                            <div className="single_text">
                                <span>02</span>
                                <p>Casing Get send off to get Steam Cleaned <br /> and Shot Blast</p>
                            </div>
                            <div className="single_text">
                                <span>03</span>
                                <p>After Cleaning Casing get inspected to make <br /> sure there is no defects and send of the Spay <br /> booth</p>
                            </div>
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>04</span>
                                    <p>Transfer Case get rebuild with the following <br /> new parts:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Crank</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Piston</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box parts_box_right">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Bearing</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Seals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* front and rear axel */}
            <div className="row">
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>FRONT AND REAR AXLE</h1>
                        <div className="single_title">
                            <div className="single_text">
                                <span>01</span>
                                <p>Axles get stripped down to the bare Banjo.</p>
                            </div>
                            <div className="single_text">
                                <span>02</span>
                                <p>Banjos, Hubs and Centre Casing get send for <br /> Sand Blasting.</p>
                            </div>
                            <div className="single_text">
                                <span>03</span>
                                <p>After Sand Blasting, we do a Quality Check <br /> on all parts</p>
                            </div>
                            <div className="single_text">
                                <span>04</span>
                                <p>After it past the Quality Check we get it, <br /> Powder Coated for an Lasting Finish</p>
                            </div>
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>05</span>
                                    <p>Both Front and Rear Axle get rebuild with <br /> new parts including the below list:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Gears</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Half Shafts</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Drive Member</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box parts_box_right">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Flanges</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Bearings</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Seals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* front and rear axel image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/SNRvDKm/Group-530.png" alt="" />
                    </div>
                </div>
            </div>
            {/* cooling system area */}
            <div className="row">
                {/* cooling system image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/2Y0SYRc/Group-530.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>COOLING SYSTEM</h1>
                        <div className="single_title">
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>01</span>
                                    <p>All Components of the Cooling System Gets <br /> replaced with new OEM Parts:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Radiator</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Thermosat</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Water Hoses</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Heater Hoses</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box parts_box_right">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Heater Matric</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Visus Fan</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Water Pump</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* brake system */}
            <div className="row">
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>BRAKE SYSTEM</h1>
                        <div className="single_title">
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>01</span>
                                    <p>All Components of the Braking System will <br /> be replaced with new OEM Parts:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Brake Boster</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Brake Master</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Brake Equalizer Value</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Steel Pipes</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box parts_box_right">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Flex Pipes</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Brake Calipers</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Brake Disc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* front and rear axel image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/7vSjJVK/Group-530.png" alt="" />
                    </div>
                </div>
            </div>
            {/* clutch system area */}
            <div className="row">
                {/* clutch system image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/DLdzRgq/Group-530.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>CLUTCH SYSTEM</h1>
                        <div className="single_title">
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>01</span>
                                    <p>All Components of the Clutch System will be <br /> replaced with New OEM Parts:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Clutch Master</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Clutch Slave</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Clutch Plate</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Pressur Plate</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box parts_box_right">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Release Bearing</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Clutch Fork</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Steel Pipe</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Flex Pipe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fuel system area */}
            <div className="row">
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>FUEL SYSTEM</h1>
                        <div className="single_title">
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>01</span>
                                    <p>All Components of the Fuel System will be replaced <br /> with new OEM Parts:</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Fuel Tank</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Fuel Pump</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Fuel Lines</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* fuel system image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/Y7Wsv7k/Group-530.png" alt="" />
                    </div>
                </div>
            </div>
            {/* suspension area */}
            <div className="row">
                {/* suspension image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/925T1K3/Group-530.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>Suspension</h1>
                        <div className="single_title">
                            <div className="single_text_parts">
                                <div className="single_text_title">
                                    <span>01</span>
                                    <p>All Suspension parts get replace with new <br /> OEM Parts.</p>
                                </div>
                                {/* parts_box */}
                                <div className="row">
                                    {/* left parts */}
                                    <div className="col-md-6">
                                        <div className="parts_box">
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Bushes</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Rubbers</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Shokes</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Coils</p>
                                            </div>
                                            <div className="parts_text">
                                                <span>{check}</span>
                                                <p>Steerings Damper</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right parts */}
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bolts nuts etc area */}
            <div className="row">
                <div className="col-md-6">
                    {/* body_content */}
                    <div className="body_content">
                        <h1>BOLTS, NUTS SCREWS, <br /> POP RIVETS AND <br /> WASHERS</h1>
                        <p className="ms-5 ps-2">We replace all bolts, Nuts, washers and Rivets <br /> with New Stainless steel and high <br /> tensile Hardware.</p>
                    </div>
                </div>
                {/* bolts nuts image */}
                <div className="col-md-6">
                    <div className="body_img">
                        <img className="w-100" src="https://i.ibb.co/sKC3c5h/Group-530.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MechanicalBody;