import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";

const List = ({ items, onRemove }) =>
(
    <TransitionGroup component={ 'ul' }>
        { items.map(item => (
            <CSSTransition
                classNames={ 'os' }
                timeout={ 750 }
                key={ item.id }
            >
                <li
                    key={ item.id }
                    onClick={ () => onRemove(item.id) }
                    style={ { "cursor": "pointer" } }
                >{ item.title }</li>
            </CSSTransition>
        )) }
    </TransitionGroup>
)


export default List