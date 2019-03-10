import React, { Component } from 'react'
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
      const {items,clearList,handleDelete,handleEdit} = this.props;
    return (
      <ul className="list-group my-5">
    <h3 className="text-capitalize text-center">Todo List</h3>
    {items.map(
        item=>{
            return(
                <TodoItem key={item.id} title={item.title}  id={item.id} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)} />

            )

        }
    )}
    <button type="button" onClick={clearList} className="btn btn-danger btn-block mt-5 text-capitalize">Clear all list</button>
    <button className="btn btn-warning">Button</button>
      </ul>
    )
  }
}
