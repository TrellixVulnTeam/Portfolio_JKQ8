import React from 'react'
import './style.css'
import ScriptTag from 'react-script-tag';

const Galaxy = () => {
    return (

<div className="overflow-wrap">
<ScriptTag type="text/javascript" src="./canavas.js" />
<ScriptTag type="text/javascript" src="./pt.min.js" />



<div className="modal-wrap flex">
  <div className="mask"></div>
  <div className="modal" id="modal">
    <div className="carousel-wrap">
      <div className="window">
        <div id="carousel">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        </div>
        <i className="mdi mdi-chevron-left" id="prev"></i>
        <i className="mdi mdi-chevron-right" id="next"></i>
      </div>
      
    </div>
    <div className="info-box">
      <div className="title"></div>
      <div className="tag"></div>
      <div className="detail"></div>
      <a href="#" target="_blank"><div className="button"><i className="mdi mdi-open-in-new"></i>VIEW SITE</div></a>
    </div>
    <i className="close mdi mdi-close"></i>
  </div>
</div>

<section id="home" className="flex">
  <div id="pt" className="canvas"></div>
  <div className="flex"/>

    <div className="text">
      Hello, I'm <span className="highlight">Ben Mim Samer</span>.
      <br/>
      I'm a software engineer student.
    </div>



</section>




</div>

    )
}


export default Galaxy
