import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todo: JSON.parse(localStorage.getItem('reactiveTodosTasks')) || [{
        task: 'Click over me!',
        done: false
    }],
    invalidInput: false,
    currEditId: null,
    editInvalidInput: false,
    theme: localStorage.getItem('reactiveTodosTheme') || "light",
}

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.TASK_OVERWRITE:
            return {
                ...state,
                todo: action.value
            }
        case actionTypes.EDIT_ID:
            return {
                ...state,
                currEditId: action.value
            }
        case actionTypes.INVALID:
            return {
                ...state,
                invalidInput: action.value
            }
        case actionTypes.EDIT_INVALID:
            return {
                ...state,
                editInvalidInput: action.value
            }
        case actionTypes.THEME:
            return {
                ...state,
                theme: action.value
            }
        default:
            return state
    }
}
