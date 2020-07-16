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
import AvatarUploadContainer from './AvatarUploadComponent';
export default class UpdateProfile extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            avatarUrl:any,
            isPub:any,
            publisherName:'',
            publisherCompany:'',
            publisherDescr:''
        };
       

        console.log(this.props);

    }
    componentDidMount() {

        this.pubTracker = Tracker.autorun(() => {
          
            const filesHandle = Meteor.subscribe('publisher.user');
            const docsReadyYet = filesHandle.ready();
           
            if(docsReadyYet)
            {
                const isPub = publisher.findOne();
                this.setState({isPub:isPub,publisherName:isPub.name,publisherCompany:isPub.company,publisherDescr:isPub.description});
            }
            // if (gh.ready()) {
            //     const game = games.findOne({ _id: this.props.params.gameID });
            //     console.log(game);
            
            //     this.setState({ game: game,gameID:game._id, gameName: game.name, gamePrice: game.price, gameCompany: game.company, gameDescr: game.description, gameSales: game.sale, gameTags: game.tags,gameBought:game.bought});
            // }

        });
        // this.fileTracker = Tracker.autorun(() => {
        //     const fh= Meteor.subscribe('files.all')
        //     // const gh = Meteor.subscribe('GF.all');
        //     // if (gh.ready()) {
        //     //     let link = GameFiles.findOne({ "meta.id": this.props.params.gameID }).link();
        //     //     // this.state.gameUrl = gameUrl;
        //     //     this.setState({ gameDownload: link });
        //     // }
        //     if(fh.ready())
        //     {
        //         let linkI=UserFiles.findOne({owner:Meteor.userId()}).link();
        //         this.setState({avatarUrl:linkI});
        //     }

        // })
    }
    componentWillUnmount() {

        this.pubTracker.stop();
        // this.fileTracker.stop();
    }

    onSubmit(e) {
        e.preventDefault();
        let success=true;
        let name = this.refs.gname.value.trim();
        let company = this.refs.gtags.value.trim();
    
        let description= this.refs.gdescr.value.trim();
        var confirm=window.confirm("Are you sure with this profile update?");
        if(confirm)
        {Meteor.call('publisher.update', this.state.isPub._id, name, company, description, (err, res) => {
            if (err) {
                
                alert(err);
            }
            else{
                browserHistory.push('/logged');
            }
        });
        }
    }
    onTodoChange(value)
    {
        this.setState({publisherName:value});
    }
    onTodoTagsChange(value)
    {
        this.setState({publisherCompany:value});
    }
    onTodoDescrChange(value)
    {
        this.setState({publisherDescr:value});
    }
    // onTodoPriceChange(value)
    // {
    //     this.setState({gamePrice:value});
    // }
    // onTodoSalesChange(value)
    // {
    //     this.setState({gameSales:value});
    // }
    render() {
        return (
            <div>


                {/* <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />

                <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />

                <title>Add publisher</title>

                <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />


                <link rel="stylesheet" href="/assets/css/fontawesome.css" />
                <link rel="stylesheet" href="/assets/css/tooplate-main.css" />
                <link rel="stylesheet" href="/assets/css/owl.css" />
                <link rel="stylesheet" href="/assets/css/flex-slider.css" /> */}

                <PrivateHeader >

                </PrivateHeader>
                <div className="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <div className="line-dec"></div>
                                    <h1>Upload your files</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <AvatarUploadContainer>

                                </AvatarUploadContainer>
                                
                               
                            </div>
                            
                        
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="container">
                                        <form id="contact" method="post" onSubmit={this.onSubmit.bind(this)} >
                                            <div className="row">
                                                
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <input name="CompanyName" type="text" ref="gname" className="form-control" id="email" value={this.state.publisherName}  onChange={e => this.onTodoChange(e.target.value)} placeholder="Your name..." required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <input name="CompayName" type="text" ref="gtags" className="form-control" id="email" value={this.state.publisherCompany} onChange={e => this.onTodoTagsChange(e.target.value)} placeholder="Your company name..." required />
                                                    </fieldset>
                                                </div>

                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <textarea name="Description" rows="6" ref="gdescr" className="form-control" id="message" value={this.state.publisherDescr}  onChange={e => this.onTodoDescrChange(e.target.value)} placeholder="Short company description..." required></textarea>
                                                    </fieldset>
                                                </div>
                                             
                                                    <div className="col-md-6">
                                                        <fieldset>
                                                            <button type="submit" id="form-submit" className="main-button button">Update your profile!</button>
                                                        </fieldset>
                                                    </div>
                                               
                                                </div>
                        </form>
                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

