const React = require('react')
const ReactDOM = require('react-dom')
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const baseTheme = require('material-ui/styles/baseThemes/darkBaseTheme')
const EditTable = require('material-ui-table-edit')
const container = document.createElement('div')

document.body.appendChild(container)
const headers = [
  {value: 'Id', type: 'TextField', width: 200},
  {value: 'Name', type: 'TextField', width: 200},
  {value: 'New', type: 'Toggle', width: 200},
  {value: 'Updated', type: 'Toggle', width: 50},
  {value: 'Deleted', type: 'Toggle', width: 100}
]

const onChange = (row) => {
  console.log(row)
}

const onDelete = (e) => {
  console.log(e)
}

const EditableTable = React.createClass({
  getChildContext () {
    return {muiTheme: getMuiTheme(baseTheme)}
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <EditTable
        onChange={onChange}
        onDelete={onDelete}
        rows={this.props.rows}
        headerColumns={headers}
        enableDelete={true}
      />
    )
  }
})

export default EditableTable;