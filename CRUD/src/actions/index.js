export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export function FETCH_EMPLOYEES() {
    return{
        type: FETCH_EMPLOYEE,
        employee:[]
    }
}
export function ADD_EMPLOYEES(employee) {
    return{
        type: ADD_EMPLOYEE,
        employee:employee
    }
}
export function EDIT_EMPLOYEES(employee) {
    return{
        type: EDIT_EMPLOYEE,
        employee:employee
    }
}
export function DELETE_EMPLOYEES(email) {
    return{
        type: DELETE_EMPLOYEE,
        email:email
    }
}