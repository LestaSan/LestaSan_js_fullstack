import React, { Component, Fragment } from 'react';
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // show: true
            list: []
        }
        this.handleToggole = this.handleToggole.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render() {
        return (
            <Fragment>
                {/* <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={(el) => {el.style.color="red"}}
                appear={true}>
                    <div>hello</div>
                </CSSTransition> */}
                {/* <div className={this.state.show? 'show': 'hide'}>hello</div> */}
                {/* <button onClick={this.handleToggole}>toggole</button> */}
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                            timeout={1000}
                            classNames="fade"
                            unmountOnExit
                            onEntered={(el) => {el.style.color="red"}}
                            appear={true}
                            key={index}>
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggole</button>
            </Fragment>
        );
    }
    
    handleToggole() {
        this.setState({
            show: this.state.show? false : true
        })
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        } )
    }
}

export default App;