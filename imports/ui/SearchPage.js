import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import shortid from 'shortid';
import GameFileUploadContainer from './HOC/GameFileUploadContainer'
import { FileUploadComponent } from './FileUpload'
import { Router, Route, browserHistory } from 'react-router';
import FileUploadContainer from '../routes/FileUploadContainer';
import PrivateHeader from './PrivateHeader';
import { any } from 'prop-types';
import { games } from '../api/games'
import { UserFiles } from '../Ser/UserFiles';
import CartButton from './CartAdd';
import { GameFiles } from '../Ser/GameFiles';
import { publisher } from '../api/publisher';
import GameSearchContainer from './HOC/GameSearchContainer';
export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchName: '',
        };


        console.log(this.props);

    }
    componentDidMount() {
        this.setState({ searchName: this.props.params.searchParam });

        // this.gameTracker = Tracker.autorun(() => {
        //     const gh = Meteor.subscribe('games');
        //     const filesHandle = Meteor.subscribe('publisher.user');
        //     const docsReadyYet = filesHandle.ready();

        //     if(docsReadyYet)
        //     {
        //         const isPub = publisher.findOne();
        //         this.setState({isPub:isPub});
        //     }
        //     if (gh.ready()) {
        //         const game = games.find({  name: { $regex: this.props.params.searchParam, $options: "i" } }).fetch();
        //         console.log(game);

        //         this.setState({ game: game});
        //     }

        // });
        // this.fileTracker = Tracker.autorun(() => {
        //     const fh= Meteor.subscribe('files.all')
        //     const gh = Meteor.subscribe('GF.all');
        //     if (gh.ready()) {
        //         let link = GameFiles.findOne({ "meta.id": this.props.params.gameID }).link();
        //         this.state.gameUrl = gameUrl;
        //         this.setState({ gameDownload: link });
        //     }
        //     if(fh.ready())
        //     {
        //         let linkI=UserFiles.findOne({"meta.id":this.props.params.gameID}).link();
        //         this.setState({gameUrl:linkI});
        //     }

        // })
    }
    // componentWillUnmount() {

    //     this.gameTracker.stop();
    //     // this.fileTracker.stop();
    // }

    // onSubmit(e) {
    //     e.preventDefault();
    //     let success=true;
    //     let gname = this.refs.gname.value.trim();
    //     let gtags = this.refs.gtags.value.trim();
    //     let gprice = this.refs.gprice.value.trim();
    //     let gsale =this.refs.sale.value;
    //     let gdescr= this.refs.gdescr.value.trim();
    //     var confirm=window.confirm("Update this game data?");
    //     if(confirm)
    //     {Meteor.call('games.update', this.state.gameID, gname, gtags, gprice, gsale,gdescr, (err, res) => {
    //         if (err) {

    //             alert(err);
    //         }
    //         else{
    //             browserHistory.push('/logged');
    //         }
    //     });
    //     }
    // }

    onTodoSearchChange(value) {
        this.setState({ searchName: value });
    }


    render() {
        return (
            <div>



                <PrivateHeader >

                </PrivateHeader>

                {/* <div className=" pull-right">
						<form  noValidate>
                            <input className="input search-input" ref="search"  onChange={e => this.onTodoSearchChange(e.target.value)}  type="text" placeholder="Enter your keyword"/>
							<button className="search-btn"><i className="fa fa-search"></i></button>
						</form>
                        
                        

                </div> */}
                <div className="container pl-0 ml-0 mr-0 pr-0">
                    <input className="form-control" onChange={e => this.onTodoSearchChange(e.target.value)}  style={{height:'50px'}} id="anythingSearch" type="text" placeholder="Type something to search games again" />
                </div>
                <GameSearchContainer title="Games found based on search" name={this.state.searchName}>

                </GameSearchContainer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="logo">
                                    <img src="/brand.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">How It Works ?</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

