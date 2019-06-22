import React, { Component } from 'react';
import MyImage from './img/myImage.jpg';
import posed from 'react-pose';

export default class About extends Component {


  render() {
    // let infoData = this.props.infoData;

      const Img = posed.img({
          hoverable: true,
          init: { filter: 'grayscale(80%) blur(2px)' },
          hover: { filter: 'grayscale(0%) blur(0px)' }
      });


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <br/>


                    <Img src={MyImage} height="600" width="650"/>
                </div>
                <div className="col">
                    <h1 className="intro-text">
                        <span style={{'wordSpacing': `0px`, 'letterSpacing': `-0.2px`}}>HELLO</span>
                    </h1>
                    <div className="">
                        <span style={{color: `rgb(255, 61, 126)`, 'wordSpacing': `1px`, 'letterSpacing': `0px`, 'fontSize': `93.333px`}} className="slabtext">
                            I'M PAVAN</span>
                    </div>
                    <br/>
                    <span style={{color: `rgb(195, 92, 255)`, 'wordSpacing': `-0.25px`, 'letterSpacing': `0px`, 'fontSize': `27.867px`}} className="slabtext">
                        I'M A FULL STACK DEVELOPER
                    </span>
                    <br/>
                    <span style={{color: `rgb(88, 125, 249)`, 'wordSpacing': `0px`, 'letterSpacing': `0px`, 'fontSize': `26.018px`}}
                          className="slabtext">
                        I STAND ON A SWEET SPOT WHERE
                    </span>
                    <br/>
                    <span style={{color: `rgb(88, 125, 249)`, 'paddingBottom': `0px`, 'wordSpacing': `-1px`, 'letterSpacing': `0px`, 'fontSize': `56px`}}>
                        <strong style={{color: `hsl(226, 83%, 56%)`}}>DESIGN</strong> &amp; <strong style={{color: `hsl(226, 83%, 56%)`}}>CODE</strong>
                    </span>
                    <br/>
                    <span style={{color: `rgb(88, 125, 249)`, 'wordSpacing': `0px`, 'letterSpacing': `0.091px`, 'fontSize': `70.843px`}}>INTERSECTS.</span>

                </div>




            </div>


    </div>
    );
  }
}