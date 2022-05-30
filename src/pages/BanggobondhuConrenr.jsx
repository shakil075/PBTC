import React from "react";
import "../css/BanggobondhuCorner/corner.css";
import cover from "../img/png/cover2.png";

const BanggobondhuConrenr = () => {
    return (
        <>
            <div className="section">
                <div className="flag_container">
                    <div className="flag">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="bdcircle"></div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="coverDiv">
                    <img src={cover} alt="" />
                </div>
            </div>
            <div className="section">
                <div className="coverDiv">
                    <img src={cover} alt="" />
                </div>
            </div>
            <div className="section">
                <div className="coverDiv">
                    <img src={cover} alt="" />
                </div>
            </div>
        </>
    );
};

export default BanggobondhuConrenr;
