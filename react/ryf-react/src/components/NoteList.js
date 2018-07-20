import React, { Component } from 'react';

class NoteList extends Component {
    // 挂载时
    // constructor (props) {
    //     super(props)
    //     this.loadData()
    // }
    // loadData () {
    //     console.log('1')
    // }
    render () {
        return (
            <ol>
                { this.props.children.map((child, index) => <li key={index}>{child}</li>)}
            </ol>
        )
    }
}

export default NoteList