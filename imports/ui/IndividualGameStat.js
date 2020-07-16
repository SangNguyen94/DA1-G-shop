import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualFile from './FileIndividualFile';
import {browserHistory} from 'react-router';

class IndividualGameStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };


    }

    CartDetails()
    {
        browserHistory.push('/view-game-details/'+this.props.files._id);
    }



    render() {
        if (this.props.docsReadyYet) {
            return <tbody>
                <tr>
                    <td className="thumb"><img src={this.props.imagesLink} alt="" /></td>
                    <td className="details">
                        <a href="#">{this.props.files.name}</a>
                        <ul>
                            <li><span>{this.props.files.tags}</span></li>

                        </ul>
                    </td>
                    <td className="price text-center"><strong>${this.props.files.profit}</strong><br /></td>
                    <td className="price text-center"><strong>{this.props.files.noSold}</strong></td>
                    <td className="text-right"><button className="main-btn icon-btn" onClick={this.CartDetails.bind(this)}><i className="fa fa-info-circle fa-lg" aria-hidden="true"></i></button></td>
                </tr>
            </tbody>
        }
        else {
            return <tbody>
                <tr>
                    empty order
                </tr>
            </tbody>
        }
    }
}
// GameIndividualFile.propTypes= {
//     fileName: PropTypes.string.isRequired,
//     fileSize: PropTypes.number.isRequired,
//     fileUrl: PropTypes.string,
//     fileId: PropTypes.string.isRequired
//   }
export default IndividualGameStat;