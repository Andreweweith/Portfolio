import React from 'react';

const Dashboard = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                User Dashboard
            </h1>
            <hr/>
            <h5>This site is in-dev, but currently you can:</h5>
            <ul>
                <li>- Sign in to Google using OAuth</li>
                <li>- Purchase credits using Stripe (after signing in with Google)</li>
                <br/>
                <li>NOTE: These credits don't apply to anything. Stripe payments are in Test mode, and will only accept test cards.</li>
                <br/>
                <br/>
                <li>
                    <h5>CARD INFO FOR TESTING STRIPE:</h5>
                    EMAIL: anything@anything.com 
                    <br/> 
                    CARD NUMBER: 4242 4242 4242 4242 
                    <br/> 
                    EXP DATE: *any date in the future* 
                    <br/> 
                    CVC: 123 
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
