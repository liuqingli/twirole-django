import React from 'react';
import { connect } from 'react-redux';

import SearchForm from './search-form.jsx';
import Status from './status.jsx';


/* Functional component that handles username queries. Also contains the status. */
function Search(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 align-self-center">
                    <SearchForm />
                </div>
                <div className="col-md-12 col-lg-12 align-self-center">
                    <Status />
                </div>
            </div>
        </div>
    );
}


export default connect(() => {})(Search);
