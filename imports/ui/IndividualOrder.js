import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualFile from './FileIndividualFile';

class IndividualOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };


    }

    CartRemove()
    {
        Meteor.call('cart.remove.item',Meteor.userId(),this.props.files._id)
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
                    <td className="price text-center"><strong>${this.props.files.price}</strong><br /></td>
                    <td className="price text-center"><strong>{this.props.files.sale}%</strong></td>
                    <td className="total text-center"><strong className="primary-color">${(this.props.files.price - (this.props.files.price * this.props.files.sale / 100)).toFixed(2)}</strong></td>
                    <td className="text-right"><button className="main-btn icon-btn" onClick={this.CartRemove.bind(this)}><i className="fa fa-close"></i></button></td>
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
export default IndividualOrder;