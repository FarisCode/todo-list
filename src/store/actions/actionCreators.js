import * as actionTypes from './actionTypes';

export const invalid = val => ({
    type: actionTypes.INVALID,
    value: val
});
export const editInvalid = val => ({
    type: actionTypes.EDIT_INVALID,
    value: val
});
export const editID = id => ({
    type: actionTypes.EDIT_ID,
    value: id
});
export const taskOverWrite = tasks => ({
    type: actionTypes.TASK_OVERWRITE,
    value: tasks
});

export const setTheme = theme => ({
    type: actionTypes.THEME,
    value: theme
});