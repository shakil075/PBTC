import React from "react";
import ContentHeader from "./ContentHeader";
import "../../../css/common/content/content.css";

const Content = ({ children }) => {
    return (
        <div class="content_section">
            <ContentHeader />
            {children}
        </div>
    );
};

export default Content;
