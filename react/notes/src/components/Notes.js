import React, { Component } from 'react';
import { db, loadCollection } from '../database'
import Note from './Note';

class Notes extends Component {
    constructor (props) {
        super(props)
        this.getInitialData()
    }
    getInitialData () {
        loadCollection('notes')
        .then(collection => {
            // console.log(collection)
            collection.insert([
                {
                    text: 'hello ~'
                },
                {
                    text: 'hola ~'
                }
            ]);
            db.saveDatabase();
            const entities = collection.chain()
            .find()
            .simplesort('$loki', 'isdesc')
            .data()
            // console.log(entities)
            this.setState({
                entities
            })
        })
    }
    // state vue data
    state = {
        entities: [
            // '邪不压正，如何?',
            // '我不是药神，印度什么药都有'
        ]
    }
    createEntry () {
        // console.log(this.state.entities)
        loadCollection('notes')
        .then((collection) => {
            const entity = collection.insert({
                text: ''
            })
            db.saveDatabase();
            this.setState((prevState) => {
                const _entities = prevState.entities;
                _entities.unshift(entity);
                return {
                    entities: _entities
                }
            })
        })
    }
    destoryEntity (entity) {
        const _entities = this.state.entities.filter((_entity) => {
            return _entity.$loki !== entity.$loki
        })
        this.setState({
            entities: _entities
        })
        loadCollection('notes').then((collection) => {
            collection.remove(entity);
            db.saveDatabase()
        })
    }
    render () {
        // react 独有的JSX 模板引擎
        // 在js里直接写html
        // 为什么react中类名 className
        // html是会被编译成js   -> js node 虚拟结点   
        // class是一个关键字，不能使用  所以使用className
        const entities = this.state.entities;
        const noteItems = entities.map((entity) => {
            // return <li key={index}>{entity}</li>
            return <Note 
            key = { entity.$loki }
            entity = { entity }
            destoryEntity = { this.destoryEntity.bind(this) }
            />
        });
        // console.log(noteItems)
        return (
            <div className="ui container notes">
                <h4 className="ui horizontal divider header">
                    <i className="paw icon"></i>
                    Notes App _ React.js
                </h4>
                <button className="ui right floated basic violet button"
                onClick={ this.createEntry.bind(this) }>添加笔记</button>
                <div className="ui divided items">
                    { noteItems }
                    { !this.state.entities.length && <span className="ui smal disabled header">还没有笔记，请先添加</span> }
                </div> 
            </div>
        );
    }
}

export default Notes;