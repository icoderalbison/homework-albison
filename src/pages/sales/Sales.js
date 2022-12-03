import React from 'react'
import Cards from '../../component/cards/Cards';
import Title from '../../component/TITLE/Title';
import ShowcaseData from "./ShowcaseData.json";
import TextData from "../How to buy/TextData.json"
import SaleCard from "../../component/SalesCards/SalesCards"
import SaleCardData from "./SaleCardData.json"
import "./Sale.scss" 

const Sales = () => {

  const[Showcase, Showcase2] = ShowcaseData;
  // const[card, card2]= SaleCardData;

  const[title1, title2] = TextData;


  return (
    <div>
      
      <div className="showcase">
        <Cards locationPage={Showcase.link} MiniTitle={Showcase.text} BigTitle={Showcase.largeText} button={Showcase.button}/>
      </div>

      <div className="container">
        <div className="title">
          <Title title={title2.title} color="black" i />
        </div>

        <div className="cards">
            {
              SaleCardData.map((data)=>(
                <div className="card">
                  <SaleCard img={data.img} title={data.title} 
                      txtColor={data.txtColor}   span={data.span} sum={data.sum} 
                      txtColor2={data.txtColor2} span2={data.span2} sum2={data.sum2}
                      txtColor3={data.txtColor3} span3={data.span3} sum3={data.sum3}
                      desc={data.desc} button={data.link2}
                  />
                </div>
              ))
            }
        </div>

      </div>

      <div className="showcase">
        <Cards BigTitle={Showcase2.largeText} links1={Showcase2.icon1} links2={Showcase2.icon2} links3={Showcase2.icon3}/>
      </div>

      
    </div>
  )
}

export default Sales