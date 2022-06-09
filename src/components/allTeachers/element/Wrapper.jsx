import React from "react";

const Wrapper = ({ scienceIconLists, children, cls, ...rest }) => {
    return (
        <div {...rest} className={cls}>
            {scienceIconLists.length > 0 &&
                scienceIconLists.map((list, index) => (
                    <i
                        key={index}
                        data-speed={list.speed}
                        className={`layer fa-solid ${list.icon}`}
                    ></i>
                ))}

            {children}
        </div>
    );
};

export default React.memo(Wrapper);
