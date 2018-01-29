import React, {Component} from "react";
import { connect } from 'react-redux';
import AddEmployee from "./AddEmployee";
import ListEmployees from './ListEmployees';
import {FETCH_EMPLOYEES, ADD_EMPLOYEES, EDIT_EMPLOYEES, DELETE_EMPLOYEES} from '../actions/index';
import Modal from 'react-modal';
const customStyles = {
  content: {
    left: '500px',
    background: '#636972',
    width: '250px',
    padding: '0px'
  }
};
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      openEditEmployee:false,
      employee:{}
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSubmitFail = this.handleSubmitFail.bind(this);
    this.handleEditEmployee = this.handleEditEmployee.bind(this);
    this.handleDeleteClicked = this.handleDeleteClicked.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.props.onShowEmployees();
  }
  handleFormSubmit(data){
    if(this.state.openEditEmployee == true){
      this.props.onEditEmployee(data);
      this.setState({openEditEmployee:false});
    }else{
      this.props.onAddEmployee(data);
    }
  }
  handleSubmitFail(error){
    
  }
  handleEditEmployee(employee){
    console.log(employee);
    this.setState({
      employee:employee,
      openEditEmployee:true
    });
  }
  handleDeleteClicked(email){
    this.props.onDeleteEmployee(email);
  }
  closeModal(){
    this.setState({
      openEditEmployee:false
    })
  }
  render() {
    return (
        <div>
          <div>React simple starter</div>
          <AddEmployee onSubmit={this.handleFormSubmit} onSubmitFail={this.handleSubmitFail} employee={this.state.employee}/>
          <ListEmployees employees={this.props.Employees} handleEditEmployee={this.handleEditEmployee} 
                         handleDeleteEmployee={this.handleDeleteClicked}/>
          <Modal isOpen={this.state.openEditEmployee} onRequestClose={this.closeModal} contentLabel="EditEmployee" style={customStyles}>
            <AddEmployee initialValues={this.state.employee} onSubmit={this.handleFormSubmit} onSubmitFail={this.handleSubmitFail}/>
          </Modal>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Employees : state.employee
  }
}

function mapDispatchToProps(dispatch) {
    return{
      onShowEmployees:()=>{
        dispatch(FETCH_EMPLOYEES());
      },
      onAddEmployee:(employee)=>{
        dispatch(ADD_EMPLOYEES(employee));
      },
      onEditEmployee:(employee)=>{
        dispatch(EDIT_EMPLOYEES(employee));
      },
      onDeleteEmployee:(email)=>{
        dispatch(DELETE_EMPLOYEES(email));
      }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);