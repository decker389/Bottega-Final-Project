import { FETCH_USER_PURCHASES, LOG_USER_IN } from './types';

export function fetchPreviousPerchases() {
    return ({
        type: FETCH_USER_PURCHASES,
        payload: []
    })
}

export function logUserIn(email, password) {
    return ({
        type: LOG_USER_IN,
        payload: {
            user: {
                // emailAddress: user.emailAddress,
                // firstName: user.firstName,
                // lastName: user.lastName,
                // previousPerchases: [user.previousPerchases],
                // cartProducts: []
            }
        }
    })
}