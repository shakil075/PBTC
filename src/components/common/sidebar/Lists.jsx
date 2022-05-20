import React from "react";
import List from "./List";
import home from "../../../img/icons/home.png";

const Lists = ({ setShow, lists }) => {
    return (
        <div className="sidebar_lists">
            <ul className="sidebar_list_items">
                <List
                    setShow={setShow}
                    icon={home}
                    class="active"
                    name="Home"
                />

                {lists.map((obj, index) => (
                    <List
                        key={index}
                        setShow={setShow}
                        icon={obj.icon}
                        name={obj.name}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Lists;
