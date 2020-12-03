/* eslint-disable import/no-anonymous-default-export */

import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    
    switch (action.type) {
        case FETCH_USER:
            // INCREDIBLY IMPORTANT - USE action.payload.data, NOT action.payload.
            // This caused many hours of frustration...
            return action.payload.data || false;
        default:
            return state;
    }
}