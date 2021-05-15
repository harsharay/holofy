import React, { useState } from "react"
import DropZone from "../DropZone/DropZone";
import ReactPlayer from 'react-player';
import myVideo from "./test.mp4";

import "./Home.css"

const Home = () => {

    const [count, setCount] = useState([1,2,3,4])

    const handleDrag = e => {
        e.dataTransfer.setData('text', e.target.id);
    }

    return (
        <div className="home-root">
            <div className='all-dropZones'>
                {count.map((item) => {
                    return (
                        <DropZone key={item} id={item}/>
                    )
                })}
                
            </div>
            {/* <p id="p1" draggable={true} onDragStart={handleDrag} >ITEM to drag</p> */}
            {/* <ReactPlayer id="p1" draggable={true} onDragStart={handleDrag} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} width="200" height="300"/> */}
            {/* <video width="200" height="300" autoPlay loop muted controls>
                <source src={myVideo} type="video/mp4" />
            </video> */}
            <video controls loop muted width="200" height="150" id="p1" draggable={true} onDragStart={handleDrag}>
                <source src={myVideo} type="video/mp4" />
            </video>
            {/* <iframe title="video_1" width="200" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY" id="p1" draggable={true}></iframe> */}
        </div>
    )
}

export default Home;