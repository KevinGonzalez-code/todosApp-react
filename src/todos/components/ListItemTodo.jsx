import { TurnedInNot } from '@mui/icons-material';
import { Button, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { TodoContext } from '../../context/TodoContext';
import { deleteTodo, setTodo } from '../../store/slices/todosSlice';

export const ListItemTodo = ({ onDeleteTodo, onEdit, todo }) => {

  const { setTodoModify } = useContext(TodoContext);
  const dispatch = useDispatch();


  const todoCompleted = (todo) => {

    dispatch(deleteTodo(todo.id));
    const todoModify = { id: todo.id, description: todo.description, done: !todo.done }
    setTodoModify(todoModify);
    dispatch(setTodo(todoModify));
    setTodoModify(undefined);
  }

  return (
    <ListItem key={todo.id} disablePadding onDoubleClick={() => todoCompleted(todo)} >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container >
          <ListItemText
            secondary={todo.description}
            sx={{
              textDecoration: todo.done ? 'line-through' : 'none'
            }} />
          <ListItemText >
            <Grid item sx={{
              display: 'flex',
              justifyContent: 'end'
            }}>
              <Button
                variant="outlined"
                sx={{ mr: 2, ml: 2 }}
                onClick={() => onEdit(todo.id)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => onDeleteTodo(todo.id)}
              >
                Delete
              </Button>

            </Grid>
          </ListItemText>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
