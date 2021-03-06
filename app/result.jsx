import React from 'react';
import { connect } from 'react-redux';

import Chart from './chart.jsx';
import Donut from './donut.jsx';
import Classification from './classification.jsx';
import Actions from './actions.js';


/* Functional component that shows a result. */
class Result extends React.Component {
    constructor(props) {
        super(props);
        this.removeResult = this.removeResult.bind(this);
    }

    removeResult() {
        this.props.dispatch({
            type: Actions.REMOVE_RESULT,
            index: this.props.index,
        });
    }

    render() {
        const profileImageUrl = `https://avatars.io/twitter/${this.props.data.username}`

        return (
            <div className="card">
                <button className="remove-result" onClick={this.removeResult} title="Remove result">
                    <span className="fa fa-remove">&nbsp;</span>
                </button>
                <div className="card-body1">
                    <div class="card-row">
                        <div class="card-img">
                            <img className="profile-pic" src={profileImageUrl} />
                        </div>
                        <div class="card-donut">
                            <Donut height={80} width={80} data={this.props.data.hybrid} />
                        </div>
                        <div class="card-label">
                            <Classification data={this.props.data.hybrid} />
                            <h6>@{ this.props.data.username }</h6>
                        </div>
                    </div>
                </div>
                <div className="card-body2 bg-light text-left">
                    <div className="row">
                        <div className="col-4">
                            <b>Basic Classifier</b>
                        </div>
                        <div className="col-4">
                            <b>Advanced Classifier</b>
                        </div>
                        <div className="col-4">
                            <b>Image Classifier</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Chart height={12} data={this.props.data.bf} />
                        </div>
                        <div className="col-4">
                            <Chart height={12} data={this.props.data.af} />
                        </div>
                        <div className="col-4">
                            <Chart height={12} data={this.props.data.cnn} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(() => {})(Result);
