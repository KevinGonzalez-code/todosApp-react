import { Grid, List } from '@mui/material';
import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TodoContext } from '../../context/TodoContext';
import { deleteTodo } from '../../store/slices/todosSlice';
import { ListItemTodo } from './ListItemTodo';

export const ListTodo = () => {

  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { setTodoModify } = useContext(TodoContext);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  const onEdit = (id) => {
    let todoModify = todos.find(todo => todo.id === id);
    setTodoModify(todoModify);
    document.getElementsByName('description')[0].value = todoModify.description;
  }

  return (
    <Grid container sx={{
      display: 'flex',
      justifyContent: 'center',
      height: 'calc(100vh - 250px)',
      mt: 5
    }} id="list-todos">
      <List sx={{ width: '100%' }}>
        {
          todos.map(todo => (
            <ListItemTodo
              key={todo.id}
              onDeleteTodo={onDeleteTodo}
              onEdit={onEdit}
              todo={todo}
            />
          ))
        }
      </List>
    </Grid >
  )
}
