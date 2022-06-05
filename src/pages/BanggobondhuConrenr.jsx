import React from "react";
import "../css/BanggobondhuCorner/corner.css";
import mujib from "../img/bonggobondhu/bonggobondhu.png";

const BanggobondhuConrenr = () => {
    return (
        <>
            <div className="section">
                <div className="sectionOne">
                    <div className="row w-100 h-100 justify-content-center align-items-center">
                        <div className="col-md-6 h-100 d-flex flex-column justify-content-center align-items-center">
                            <div className="heading">
                                <div className="firstHead d-flex flex-column ">
                                    <span>Sheikh</span>
                                    <span>Mujibur</span>
                                    <span>Rahman</span>
                                </div>
                                <div
                                    data-text="Bangabandhu"
                                    className="secondHead"
                                >
                                    Bangabandhu
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 h-100 position-relative">
                            <div className="imageDiv">
                                {/* <img src={mujib} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
        </>
    );
};

export default BanggobondhuConrenr;
