import React from "react";
import "./DropZone.css";


const DropZone = (props) => {


    const handleDrop = e => {
        e.preventDefault();
        let data = e.dataTransfer.getData('text');
        e.target.appendChild(document.getElementById(data));
        console.log(e.target.className)

        let item = document.getElementById(data);

        if(e.target.className.indexOf(1) >= 0){
            item.style.position = 'absolute';
            
            item.style.left = '0px';
            item.style.top = '0px';
            item.style.right = '';
            item.style.bottom = '';

        } else if(e.target.className.indexOf(2) >= 0) {
            item.style.position = 'absolute';
            item.style.right = '0px';
            item.style.top = '0px';
            item.style.bottom = '';
            item.style.left = '';

        } else if(e.target.className.indexOf(3) >= 0) {
            item.style.position = 'absolute';
            item.style.bottom = '0px';
            item.style.left = '0px';
            item.style.top = '';
            item.style.right = '';
            

        } else if(e.target.className.indexOf(4) >= 0) {
            item.style.position = 'absolute';
            item.style.right = '0px';
            item.style.bottom = '0px';
            item.style.top = '';
            item.style.left = '';

        }
    }

    const allowDrop = e => {
        e.preventDefault();
    }

    return (
        <div className={'drop-div-'+props.id} onDrop={handleDrop} onDragOver={allowDrop} onTouchEnd={handleDrop}>
            
        </div>
    )
}

export default DropZone;