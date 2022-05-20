import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

const Layout = ({ children }) => {
    let showNav = true;

    const pathDir = useLocation().pathname;

    if (
        pathDir === "/student-dashboard" ||
        pathDir === "/teacher-dashboard" ||
        pathDir === "/admin-dashboard"
    ) {
        showNav = false;
    } else {
        showNav = true;
    }

    return (
        <>
            {showNav ? <Nav /> : null}
            <main>{children}</main>
        </>
    );
};
export default Layout;
