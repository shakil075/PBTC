import React from "react";

const List = ({ name, icon, setShow, ...rest }) => {
    const handleActive = (e) => {
        const parent = e.target.parentElement.childNodes;
        parent.forEach((child) => {
            child.classList.remove("active");
        });
        e.target.classList.add("active");
        setShow(name.toLowerCase());
    };
    return (
        <li onClick={handleActive} {...rest}>
            <img src={icon} alt="list" />
            <span>{name}</span>
        </li>
    );
};

export default List;
