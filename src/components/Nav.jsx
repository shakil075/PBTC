import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/student-dashboard">Student Pannel</Link>
            <Link to="/teacher-dashboard">Teacher Pannel</Link>
            <Link to="/admin-dashboard">Admin Pannel</Link>
        </ul>
    );
};

export default Nav;
