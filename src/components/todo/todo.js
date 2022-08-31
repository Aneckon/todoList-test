import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '..';
import { removeTodo } from '../../redux/slice/todoSlice';

import './todo.css';

export const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);

  const onClickRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo">
      {todoList.map((item) => (
        <div key={item.id} className="todo__item">
          <p>{item.todoName}</p>
          <Button onClick={() => onClickRemoveTodo(item.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};
