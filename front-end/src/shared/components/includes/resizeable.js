import React, {useState, useEffect} from 'react';
import {ResizableElementContainer, WorkSpaceElementBorder} from "../../global.style";

const Resizeable = (props) => {
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        const el = document.getElementById(props.elementId);
        el.addEventListener("mousedown", mousedown);

        function mousedown(e) {

            console.log('Resizeable: mouse Down')
            let prevX = e.clientX;
            let prevY = e.clientY;

            const mousemove = (e) => {

                if (!isResizing) {
                    let newX = prevX - e.clientX;
                    let newY = prevY - e.clientY;

                    const rect = el.getBoundingClientRect();
                    console.log(rect.top);

                    el.style.left = rect.left - newX + "px";
                    el.style.top = rect.top - newY + "px";

                    prevX = e.clientX;
                    prevY = e.clientY;
                }
                console.log('Resizeable: mouse Move')
            }
            window.addEventListener("mousemove", mousemove);
            window.addEventListener("mouseup", mouseup);

            function mouseup() {
                console.log('Resizeable: mouse Up')
                window.removeEventListener("mousemove", mousemove);
                window.removeEventListener("mouseup", mouseup);
            }
        }

        const resizers = [];
        resizers.push(document.getElementById('topLeft1'));
        resizers.push(document.getElementById('topRight1'));
        resizers.push(document.getElementById('bottomLeft1'));
        resizers.push(document.getElementById('bottomRight1'));
        let currentResizer;

        for (let resizer of resizers) {

            function mousedownCorner(e) {
                console.log('Resizeable: Corner: mouse Down')
                currentResizer = e.target;
                setIsResizing(() => true);

                let prevX = e.clientX;
                let prevY = e.clientY;

                window.addEventListener("mousemove", mousemoveCorner);
                window.addEventListener("mouseup", mouseupCorner);

                function mousemoveCorner(e) {
                    console.log('Resizeable: Corner: mouse Move')
                    const rect = el.getBoundingClientRect();


                    if (currentResizer.id === "bottomRight1") {
                        el.style.width = rect.width - (prevX - e.clientX) + "px";
                        el.style.height = rect.height - (prevY - e.clientY) + "px";
                    } else if (currentResizer.id === "bottomLeft1") {
                        el.style.width = rect.width + (prevX - e.clientX) + "px";
                        el.style.height = rect.height - (prevY - e.clientY) + "px";
                        el.style.left = rect.left - (prevX - e.clientX) + "px";
                    } else if (currentResizer.id === "topRight1") {
                        el.style.top = rect.top - (prevY - e.clientY) + "px";
                        el.style.width = rect.width - (prevX - e.clientX) + "px";
                        el.style.height = rect.height + (prevY - e.clientY) + "px";
                    } else if (currentResizer.id === "topLeft1") {
                        el.style.top = rect.top - (prevY - e.clientY) + "px";
                        el.style.width = rect.width + (prevX - e.clientX) + "px";
                        el.style.height = rect.height + (prevY - e.clientY) + "px";
                        el.style.left = rect.left - (prevX - e.clientX) + "px";
                    }

                    prevX = e.clientX;
                    prevY = e.clientY;
                }

                function mouseupCorner() {
                    console.log('Resizeable: Corner: mouse Up')
                    window.removeEventListener("mousemove", mousemoveCorner);
                    window.removeEventListener("mouseup", mouseupCorner);
                    setIsResizing(() => false);
                }
            }

            resizer.addEventListener("mousedown", mousedownCorner);
        }
    }, [])



    return(
        <ResizableElementContainer>
            {props.children}
        </ResizableElementContainer>
    )
}

export default Resizeable
