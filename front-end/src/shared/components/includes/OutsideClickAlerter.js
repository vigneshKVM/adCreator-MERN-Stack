/********************************************/

import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/********************************************/

function useOutsideAlerter(ref, fun) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                fun(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, fun]);
}

/********************************************/

function OutsideClickAlerter(props) {

    /********************************************/
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.function);
    /********************************************/

    return <span ref={wrapperRef}>{props.children}</span>;
}

OutsideClickAlerter.propTypes = {
    children: PropTypes.element.isRequired
};

/********************************************/
export default OutsideClickAlerter;
/********************************************/
