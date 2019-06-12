import Axios from "axios";

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';
const ADD_PURCHASE = 'ADD_PURCHASE'

export function requestBudgetData() {
    let data = Axios.get('/api/budget-data').then(res=> res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}

export function addPurchase() {
    let purchase = Axios.post()
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case `${REQUEST_BUDGET_DATA}_FULFILLED`:
            return {
                ...state,
                ...action.payload,
                loading: false,
                
            }
        case `${REQUEST_BUDGET_DATA}_PENDING`:
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}