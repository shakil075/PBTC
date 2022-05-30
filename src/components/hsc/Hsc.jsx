import React from "react";
import Ability from "./sections/Ability";
import Apply from "./sections/Apply";
import Banner from "./sections/Banner";
import Facilities from "./sections/Facilities";
import Faculty from "./sections/Faculty";
import Subject from "./sections/Subject";
import "../../css/Hsc/hsc.css";

const Hsc = () => {
    return (
        <div>
            <a href="#top" class="back-top">
                <i class="fas fa-chevron-up"></i>
            </a>
            <Banner />
            <Subject />
            <Ability />
            <Faculty />
            <Facilities />
            <Apply />
            <div class="sub-footer"></div>
        </div>
    );
};

export default Hsc;
