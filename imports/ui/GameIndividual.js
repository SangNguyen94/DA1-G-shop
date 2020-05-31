import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
class GameIndividual extends Component {
    constructor(props) {
        super(props);

        this.state = {
            games:this.props.gameId,
        };

      
    }




   
    render() {
        let game=this.props.gameId;
        if(this.props.gameSale>0)
        {
            return <div className="">
            {/* <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Hind:400,700" rel="stylesheet" />


            <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />


            <link type="text/css" rel="stylesheet" href="/css/slick.css" />
            <link type="text/css" rel="stylesheet" href="/css/slick-theme.css" />


            <link type="text/css" rel="stylesheet" href="/css/nouislider.min.css" />


            <link rel="stylesheet" href="/css/font-awesome.min.css" />


            <link type="text/css" rel="stylesheet" href="/css/style.css" />

            <script type="text/babel" src="%PUBLIC_URL%/js/jquery.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/bootstrap.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/slick.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/nouislider.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/jquery.zoom.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/main.js"></script> */}

{/* 
            <div className="section section-grey">

             <div className="container">

        <div className="row"> */}

            {/* <div className="col-md-12">
                <div className="section-title">
                    <h2 className="title">Latest Products</h2>
                </div>
            </div> */} 


            {/* <div className="col-md-3 col-sm-6 col-xs-6"> */}
                <div className="product product-single">
                    <div className="product-thumb">
                        <div className="product-label">
                            <span>New</span>
                            <span className="sale">-{this.props.gameSale}%</span>
                        </div>
                        <button className="main-btn quick-view" onClick={()=>browserHistory.push('/view-game-details/'+this.state.games)}><i className="fa fa-search-plus"></i>View details</button>
                        <img src={this.props.gameUrl} alt={this.props.gameName} />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">${this.props.gamePrice-((this.props.gamePrice*this.props.gameSale)/100)}   <del className="product-old-price">  ${this.props.gamePrice}</del></h3>
                        <h2 className="product-name"><a href="#">{this.props.gameName}</a></h2>
                        <div className="product-btns">
                            {/* <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                            <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button> */}
                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
        }
        else {
            return <div className="">
            {/* <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Hind:400,700" rel="stylesheet" />


            <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />


            <link type="text/css" rel="stylesheet" href="/css/slick.css" />
            <link type="text/css" rel="stylesheet" href="/css/slick-theme.css" />


            <link type="text/css" rel="stylesheet" href="/css/nouislider.min.css" />


            <link rel="stylesheet" href="/css/font-awesome.min.css" />


            <link type="text/css" rel="stylesheet" href="/css/style.css" />

            <script type="text/babel" src="%PUBLIC_URL%/js/jquery.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/bootstrap.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/slick.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/nouislider.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/jquery.zoom.min.js"></script>
            <script type="text/babel" src="%PUBLIC_URL%/js/main.js"></script> */}

{/* 
            <div className="section section-grey">

             <div className="container">

        <div className="row"> */}

            {/* <div className="col-md-12">
                <div className="section-title">
                    <h2 className="title">Latest Products</h2>
                </div>
            </div> */} 


            {/* <div className="col-md-3 col-sm-6 col-xs-6"> */}
                <div className="product product-single">
                    <div className="product-thumb">
                        <div className="product-label">
                            <span>New</span>
                            
                        </div>
                        <button className="main-btn quick-view" onClick={()=>browserHistory.push('/view-game-details/'+this.state.games)}><i className="fa fa-search-plus"></i>View details</button>
                        <img src={this.props.gameUrl} alt={this.props.gameName} />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">${this.props.gamePrice}</h3>
                        <h2 className="product-name">{this.props.gameName}</h2>
                        <div className="product-btns">
                            {/* <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                            <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button> */}
                            <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
        }
       
        //  </div>   
        //  </div>                
        // </div>




    }
}
GameIndividual.propTypes = {
    gameName: PropTypes.string.isRequired,
    gamePrice: PropTypes.number.isRequired,
    gameSale: PropTypes.number,
    gameUrl:PropTypes.string,
    gameId: PropTypes.string.isRequired
}
export default GameIndividual;