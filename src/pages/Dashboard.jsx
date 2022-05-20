import React from "react";
import Content from "../components/common/content/Content";
import Event from "../components/common/event/Event";
import Sidebar from "../components/common/sidebar/Sidebar";
import "../css/common/dashboard/dashboard.css";
import "../css/page/page.css";

const Dashboard = ({ children, pannel, lists, setShow }) => {
    return (
        <div className={`wrapper`}>
            <Sidebar pannel={pannel} lists={lists} setShow={setShow} />
            <Content children={children} />
            <Event />
        </div>
    );
};

export default Dashboard;
