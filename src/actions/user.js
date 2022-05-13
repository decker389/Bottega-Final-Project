import { FETCH_USER_PURCHASES } from './types';

export function fetchPreviousPerchases() {
    return ({
        type: FETCH_USER_PURCHASES,
        payload: []
    })
}