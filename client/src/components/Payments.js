import * as actions from '../actions';

import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

class Payments extends Component {
    render() {
        debugger;

        return (
            <StripeCheckout
                name="Hey you, buy some credits!"
                description="$5.00 for 5 email credits"
                // amount is in CENTS
                amount={500} // 500 cents == 5 usd
                token={token => this.props.handleToken(token)} // callback function, it's the token we receive back from stripe
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);