import { Component } from "react";
import WatchCard from "../WatchCard";
import Bands from "../Bands";
import Cases from '../Cases'
import './index.css'


const caseList = [{id:"silver",case:'Silver Aluminium',imgUrl:"../../silver-case.png"},
{id:"rose-gold",case:'Rose GOld Aluminium',imgUrl:"../../rose-gold-case.png"},
{id:"black",case:'Jet Black Aluminium',imgUrl:"../../black-case.png"},
{id:"natural-titanium",case:'Natural Titanium',imgUrl:"../../natural-titanium.png"},
{id:"gold-titanium",case:'Gold Titanium',imgUrl:"../../gold-titanium.png"},
{id:"slate-titanium",case:'Slate Titanium',imgUrl:"../../slate-titanium.png"},
]

const bandsList = [{id:"yellow",band:'Star Fruit Solo Loop',imgUrl:"../../yellow-strap.jpg"},
    {id:"blue",band:'Ultramarine Solo Loop',imgUrl:"../../blue-strap.jpg"},
    {id:"green",band:'Lake Green Solo Loop',imgUrl:"../../green-strap.jpg"},
    {id:"black",band:'Black Solo Loop',imgUrl:"../../black-strap.jpg"},
    {id:"white",band:'Light Blush Solo Loop',imgUrl:"../../white-strap.jpg"},
    {id:"blue-black-nike",band:'Black/Blue Nike Sport Loop',imgUrl:"../../blue-black-nike.jpg"},
    {id:"pink-nike",band:'Starlight/Pink Nike Sport Loop',imgUrl:"../../pink-nike.jpg"},
    {id:"grey-blue-nike",band:'Grey/Blue Nike Sport Loop',imgUrl:"../../grey-blue-nike.jpg"},
    {id:"grey-green-nike",band:'Green/Grey Nike Sport Loop',imgUrl:"../../green-grey-nike.jpg"},
    {id:"blue-red-nike",band:'Blue/Red Sport Loop',imgUrl:"../../blue-red-nike.jpg"},
    {id:"volt-splash-nike",band:'Volt Splash Nike Sport Band',imgUrl:"../../volt-splash-nike.jpg"},
    {id:"magic-ember-nike",band:'Magic Ember Nike Sport Band',imgUrl:"../../magic-ember-nike.jpg"},
    {id:"midnight-nike",band:'Midnight Sky Nike Sport Band',imgUrl:"../../midnight-nike.jpg"},
    {id:"platinum-nike",band:'Pure Platinum Nike Sport Band',imgUrl:"../../platinum-nike.jpg"},
    {id:"dessert-nike",band:'Dessert Stone Nike Sport Band',imgUrl:"../../dessert-nike.jpg"},
    {id:"khaki-nike",band:'Cargo Khaki Nike Sport Band',imgUrl:"../../khaki-nike.jpg"},
    {id:"blue-flame-nike",band:'Blue Flame Nike Sport Band',imgUrl:"../../blue-flame-nike.jpg"},
]

class Main extends Component{
    state = {active:0 ,sizeStatus:0, caseStatus: 0, bandStatus:0, activeBandIndex: 3, activeBandUrl:"", activeCaseIndex:2, activeCaseUrl:""}
    
    componentDidMount(){
        const {activeBandIndex,activeCaseIndex} = this.state;
        this.setState({activeBandUrl:bandsList[activeBandIndex]['imgUrl'], activeCaseUrl:caseList[activeCaseIndex]['imgUrl']})
    }

    onClickBands = ()=>{
        this.setState({bandStatus:1,sizeStatus:0,caseStatus:0})
    }

    onClickCases = ()=>{
        this.setState({bandStatus:0,sizeStatus:0,caseStatus:1})
    }

    onClickSize = ()=>{
        this.setState({bandStatus:0,sizeStatus:1,caseStatus:0})
    }

    changeBandId = (index)=>{
        this.setState({activeBandIndex:index,activeBandUrl:bandsList[index].imgUrl});
    }

    changeCaseId = (index)=>{
        this.setState({activeCaseIndex:index,activeCaseUrl:caseList[index].imgUrl});
    }

    onClickGetStarted = ()=>{
        this.setState({active:1})
    }

    render(){
        const {active,sizeStatus, caseStatus, bandStatus,activeBandIndex, activeCaseUrl,activeCaseIndex,activeBandUrl} = this.state;

        return <div className="main-bg">
            {active === 0 ? <div className="main-ultra-bg">
                <p className="main-ultra-text">Apple Watch Studio</p>
                <h1 className="main-ultra-main-heading">Choose a case. <br/> Pick a band. <br/> Create your own style.</h1>
                <button onClick={this.onClickGetStarted} className="main-ultra-button">Get Started</button>
            </div>:""}
        {!sizeStatus && ! caseStatus && !bandStatus ? <WatchCard/> : ""}
        {sizeStatus ? <WatchCard/> : ""}
        {caseStatus ? <Cases activeCaseIndex={activeCaseIndex} activeBandUrl={activeBandUrl} changeCaseId={this.changeCaseId} caseList={caseList}/> : ""}
        {bandStatus ? <Bands activeBandIndex={activeBandIndex} activeCaseUrl={activeCaseUrl} changeBandId={this.changeBandId} bandsList={bandsList}/> : " "}
        
        {active ? <><h1 className="main-heading">APPLE WATCH SERIES 10</h1>
        <p className="main-text">46mm {caseList[activeCaseIndex]['case']} Case with {bandsList[activeBandIndex]['band']}</p>
        <p className="main-price">FROM $429</p>
        <div className="main-buttons-div">
            <button className="main-button" onClick={this.onClickSize}>Size</button>
            <button className="main-button" onClick={this.onClickCases}>Case</button>
            <button className="main-button" onClick={this.onClickBands}>Band</button>
        </div></>:""}
    </div>
    }
}

export default Main;