import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import CartButton from './CartAdd';
class GameIndividual extends Component {
    constructor(props) {
        super(props);

        this.state = {
            games:this.props.gameId,
        };

      
    }
    update()
    {
        if(this.props.gameUpdate)
        {
        return  <div className="product-btns W-50">
            <button className="primary-btn add-to-cart pull-right" onClick={()=>{browserHistory.push('/update-game/'+this.props.gameId)}} ><i className="fa fa-cog"></i> Update</button>
        </div>
        }
        else{
            return <div></div>
        }
    }

    bought(){
        let bought=false;
        this.props.gameBought.map(game=>{
            if(Meteor.userId()===game)
            {
                bought=true;
            }
        })
        if(bought)
        {
            return <div></div>
        }
        else{
            return <CartButton gameId={this.props.gameId}></CartButton>

        }
    }

   
    render() {
        let game=this.props.gameId;
        if(this.props.gameSale>0)
        {
            return <div className="">
        
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
                        <h3 className="product-price">${(this.props.gamePrice-((this.props.gamePrice*this.props.gameSale)/100)).toFixed(2)}   <del className="product-old-price">  ${this.props.gamePrice}</del></h3>
                        <h2 className="product-name"><a href="#">{this.props.gameName}</a></h2>
                            {this.bought()}
                            {this.update()}
                    </div>
                </div>
            </div>
        // </div>
        }
        else {
            return <div className="">
       
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
                      
                            
                        {this.bought()}
                        {this.update()}
           
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
    gameId: PropTypes.string.isRequired,
    gameBought:PropTypes.array,
}
export default GameIndividual;