import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../components/common/Footer";
import "../css/footer/footer.css";

const Layout = ({ children }) => {
    const [windoPosition, setWindowPosition] = useState(0);

    let showNav = false;

    const pathDir = useLocation().pathname;

    if (
        pathDir === "/student-dashboard" ||
        pathDir === "/teacher-dashboard" ||
        pathDir === "/admin-dashboard"
    ) {
        showNav = false;
    } else {
        // showNav = true;
    }

    useEffect(() => {
        window.addEventListener("scroll", function () {
            setWindowPosition(window.scrollY);
        });
    }, [setWindowPosition]);

    useEffect(() => {
        if (showNav) {
            const navbar = document.querySelector("#navbar");
            navbar.classList.toggle("scroll_active", windoPosition > 80);
        }
    });
    return (
        <>
            {showNav ? <Nav /> : null}
            <main>{children}</main>
            {showNav ? <div class="sub-footer"></div> : null}
            {showNav ? <Footer /> : null}
        </>
    );
};
export default Layout;
