import {FETCH_EMPLOYEE} from '../actions/index';
import {ADD_EMPLOYEE} from '../actions/index';
import {EDIT_EMPLOYEE} from '../actions/index';
import {DELETE_EMPLOYEE} from '../actions/index';

const initialState ={
    Employees : [{name:'Kaberi',
        email:'kaberi.basu@daffodilsw.com',
        employeeID:'DFG-2024',
        department:'Technical'
    }]
};

export function Employee_Reducer(state=initialState.Employees, action){
    switch (action.type){
        case FETCH_EMPLOYEE:
            return state;
        case ADD_EMPLOYEE:
            return [
                    ...state,
                    action.employee
                ];
        case EDIT_EMPLOYEE:
            var newState = JSON.parse(JSON.stringify(state));
            newState.forEach((employee)=>{
                if(employee.email === action.employee.email){
                        employee.email=action.employee.email,
                        employee.name=action.employee.name,
                        employee.employeeID=action.employee.employeeID,
                        employee.department=action.employee.department
                }
            });
            return newState;
        case DELETE_EMPLOYEE:
            var newState = JSON.parse(JSON.stringify(state));
            var deleted;
            state.forEach((employee,index)=>{
                if(employee.email === action.email){
                    deleted=newState.splice(index,1);
                }
            });
            return newState;
        default :
            return state;
    }
}