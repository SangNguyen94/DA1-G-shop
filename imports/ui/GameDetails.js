import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrivateHeader from './PrivateHeader';
import { games } from '../api/games'
import { UserFiles } from '../Ser/UserFiles';
import CartButton from './CartAdd';
import { GameFiles } from '../Ser/GameFiles';
class GameDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: [],
            gameID:'',
            gameName: '',
            gamePrice: 0,
            gameCompany: '',
            gameDescr: '',
            gameSales: 0,
            gameTags: '',
            gameUrl: '',
            gameDownload:'',
            gameBought:[]
        };


    }

    componentDidMount() {

        this.gameTracker = Tracker.autorun(() => {
            const gh = Meteor.subscribe('games');
            let game;
            if (gh.ready()) {
                 game = games.findOne({ _id: this.props.params.gameID });
                console.log(game);
                this.setState({ game: game,gameID:game._id, gameName: game.name, gamePrice: game.price, gameCompany: game.company, gameDescr: game.description, gameSales: game.sale, gameTags: game.tags,gameBought:game.bought});
            }

            // this.state.gameName = game.name;
            // this.state.gameCompany = game.company;
            // this.state.gameDescr = game.description;
            // this.state.gamePrice = game.price;
            // this.state.gameSales = game.sales;
            // this.state.gameTags = game.tags;

        });
        this.fileTracker = Tracker.autorun(() => {
            const fh= Meteor.subscribe('files.all')
            const gh = Meteor.subscribe('GF.all');
            if (gh.ready()) {
                let link = GameFiles.findOne({ "meta.id": this.props.params.gameID }).link();
                // this.state.gameUrl = gameUrl;
                this.setState({ gameDownload: link });
            }
            if(fh.ready())
            {
                let linkI=UserFiles.findOne({"meta.id":this.props.params.gameID}).link();
                this.setState({gameUrl:linkI});
            }

        })
    }
    componentWillUnmount() {

        this.gameTracker.stop();
    }

    boughtOrBuy(){
        let bought=false;
        this.state.gameBought.map(game=>{
            console.log(Meteor.userId(),game);
            if(Meteor.userId()===game)
            {
                bought=true;
            }
        })
        if(bought)
        {
          return  <a href={this.state.gameDownload} className="btn btn-outline btn-primary btn-md" target="_blank">Download</a>
         
        }
        else{
            return <CartButton gameId={this.state.gameID}></CartButton>
        }
    }

    render() {
        console.log(this.state.game);
        const sale = this.state.gameSales;
        if (sale >= 1) {
            console.log(sale);
            return <div className="">
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />


                <PrivateHeader>

                </PrivateHeader>
                <link type="text/css" rel="stylesheet" href="/css/style.css" />
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#"> GameDetails</a></li>
                            <li className="active"> {this.state.gameName}</li>
                        </ul>
                    </div>
                </div>


                <div className="section">

                    <div className="container">

                        <div className="row">

                            {/* <div className="product product-details clearfix "> */}
                            <div className="col">
                                <div id="product-main-view">
                                    <div className="product-view">
                                        <img src={this.state.gameUrl} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="product-body">
                                    <div className="product-label">
                                        <span>New</span>
                                        <span className="sale">-{this.state.gameSales}%</span>
                                    </div>
                                    <h2 className="product-name">{this.state.gameName}</h2>
                                    <h3 className="product-price">${(this.state.gamePrice - (this.state.gamePrice * this.state.gameSales / 100)).toFixed(2)}    <del className="product-old-price">${this.state.gamePrice}</del></h3>

                                    <p><strong>Game Company:</strong> {this.state.gameCompany}</p>
                                    <p><strong>Game tags: </strong> {this.state.gameTags}</p>
                                    <p>{this.state.gameDescr}</p>
                                    {this.boughtOrBuy()}

                                   
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="product-tab">
                                    <ul className="tab-nav">
                                        <li className="active"><a data-toggle="tab" href="#tab" >Game Info</a></li>
                                        <li><a data-toggle="tab1" href="#tab1">Description</a></li>
                                        
                                    </ul>
                                    <div className="tab-content">
                                        <div id="tab1" className="tab-pane fade in active">
                                            <p>{this.state.gameDescr}</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}

                        </div>

                    </div>

                </div>
            </div>




        }
        else {
            console.log(sale);
            return <div className="">
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />





                <PrivateHeader>

                </PrivateHeader>
                <link type="text/css" rel="stylesheet" href="/css/style.css" />
                <div id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">GameDetails</a></li>
                            <li className="active">{this.state.gameName}</li>
                        </ul>
                    </div>
                </div>


                <div className="section">

                    <div className="container">

                        <div className="row">

                            {/* <div className="product product-details clearfix w-100"> */}
                            <div className="col-md-6">
                                <div id="product-main-view">
                                    <div className="product-view">
                                        <img src={this.state.gameUrl} alt="" />
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="product-body">
                                    <div className="product-label" >
                                        <span >New</span>

                                    </div>
                                    <h2 className="product-name">{this.state.gameName}</h2>
                                    <h3 className="product-price">${this.state.gamePrice}    </h3>

                                    <p><strong>Game Company:</strong> {this.state.gameCompany}</p>
                                    <p><strong>Game tags: </strong> {this.state.gameTags}</p>
                                    <p>{this.state.gameDescr}</p>


                                    <div className="product-btns">
                                        <div className="qty-input w-50">
                                            <span className="text-uppercase">Buy this awesome game now! </span>

                                        </div>
                                        {/* <CartButton gameId={this.state.gameID}></CartButton> */}
                                        {this.boughtOrBuy()}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="product-tab">
                                    <ul className="tab-nav">
                                        <li className="active"><a data-toggle="tab" >Game Info</a></li>
                                        <li><a data-toggle="tab" href="#tab1">Description</a></li>
                                        
                                    </ul>
                                    <div className="tab-content">
                                        <div id="tab1" className="tab-pane fade in active">
                                            <p>{this.state.gameDescr}</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}

                        </div>

                    </div>

                </div>
            </div>






        }
    }
}
// GameDetails.propTypes = {
//     gameName: PropTypes.string,
//     gamePrice: PropTypes.number,
//     gameSales: PropTypes.string,
//     gameUrl:PropTypes.string,
//     gameCompany:PropTypes.string,
//     gameDescr:PropTypes.string,
//     gameTags:PropTypes.string,
//     gameId: PropTypes.string
// }
export default GameDetails;