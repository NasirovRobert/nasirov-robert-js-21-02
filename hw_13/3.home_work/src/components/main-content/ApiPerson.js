import React from 'react'

export class ApiPerson extends React.Component {
    render() {
        return <tr>
            <td>{this.props.name}</td>
            <td>{this.props.height}</td>
            <td>{this.props.mass}</td>
            <td>{this.props.gender}</td>
        </tr>
    }
}