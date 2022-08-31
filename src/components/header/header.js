import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import { Input, Button } from '..';
import { addTodo } from '../../redux/slice/todoSlice';

import './header.css';

export const Header = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);

  const [addTodoId, setAddTodoId] = useState(0);
  const [addTodoValue, setAddTodoValue] = useState('');

  const onClickAddTodo = () => {
    if (todoList.length !== 10) {
      if (addTodoValue.length && addTodoValue.indexOf(' ')) {
        setAddTodoId(addTodoId + 1);
        dispatch(addTodo({ id: addTodoId, todoName: addTodoValue }));
      } else{
        toast.warn('fill in the name');
      }
    } else {
      toast.warn('You cannot add more than 10 todo');
    }
  };

  return (
    <div className="header">
      <Input placeholder="Enter a name" value={addTodoValue} onChange={setAddTodoValue} />
      <Button onClick={onClickAddTodo}>Add</Button>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
