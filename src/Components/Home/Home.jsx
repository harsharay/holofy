import React, { useState, useEffect } from "react"
import DropZone from "../DropZone/DropZone";
import ReactPlayer from 'react-player';
import myVideo from "./test.mp4";

import "./Home.css"

const Home = () => {

    const [count, setCount] = useState([1,2,3,4])
    const [pageLoaded, setPageLoaded] = useState(false)

    // useEffect(() => {
    //     setPageLoaded(true)
    // },[])

    // useEffect(() => {
    //     if(pageLoaded) {
    //         const vid = document.querySelector('#p1');

    //         vid.addEventListener('touchmove', function(e){
    //             e.dataTransfer.setData('text', e.target.id);
    //         })
    //     }
    // }, [pageLoaded])
    // // vid.addEventListener('touchMove', function(e){
    // //     e.dataTransfer.setData('text', e.target.id);
        
    // //     vid.pause();
    // // })
    useEffect(() => {
        // find the element that you want to drag.
        const vid = document.getElementById('p1');
        
        /* listen to the touchmove event,
        every time it fires, grab the location
        of touch and assign it to box */
        
        vid.addEventListener('touchmove', function(e) {
          let touchLocation = e.targetTouches[0];
          
          vid.style.left = touchLocation.pageX + 'px';
          vid.style.top = touchLocation.pageY + 'px';
        })
        
      },[])

    const handleDrag = e => {
        e.dataTransfer.setData('text', e.target.id);

        const vid = document.querySelector('#p1');
        vid.pause();
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
            <video controls loop muted width="200" height="150" id="p1" draggable={true} onDragStart={handleDrag}>
                <source src={myVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home;