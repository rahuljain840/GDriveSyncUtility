import React, { Component } from 'react';

class ListEmployees extends Component {
    constructor(props){
        super(props);
        this.handleEditClicked = this.handleEditClicked.bind(this);
        this.deleteConfirmation = this.deleteConfirmation.bind(this);
    }
    handleEditClicked(employee){
        this.props.handleEditEmployee(employee);
    }
    deleteConfirmation(email){
        this.props.handleDeleteEmployee(email);
    }
    render(){
        return(
        <div className="container ">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="row">
                        <h2>Employee List</h2>
                        <table className="table table-bordered table-striped table-hover table-responsive">

                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Employee ID</th>
                                <th>Department</th>
                                <th> Actions </th>
                            </tr>
                            </thead>
                            <tbody>{
                                this.props.employees.map(employee => <tr>
                                    <td> {employee.name} </td>
                                    <td>{employee.email}</td>
                                    <td>{employee.employeeID}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <button className="btn" onClick={()=>this.handleEditClicked(employee)}>
                                            Edit
                                        </button>
                                        <button className="btn"
                                                onClick={()=>this.deleteConfirmation(employee.email)}>Delete
                                        </button>
                                    </td>
                                </tr>)}</tbody>
                        </table>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
        )
    }
}
export default ListEmployees