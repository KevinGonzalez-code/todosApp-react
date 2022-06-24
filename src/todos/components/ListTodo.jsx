import { TurnedInNot } from '@mui/icons-material';
import { Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TodoContext } from '../../context/TodoContext';
import { deleteTodo } from '../../store/slices/todosSlice';

export const ListTodo = () => {

  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { todo, setTodoModify } = useContext(TodoContext);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  const onEdit = (id) => {
    let todoModify = todos.find(todo => todo.id === id);
    setTodoModify(todoModify);
    document.getElementsByName('description')[0].value = todoModify.description;

    // dispatch(deleteTodo(id));
    // dispatch(setTodo({
    //   ...todo,
    //   description: 'Modify'
    // }));
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
            <ListItem key={todo.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container >
                  <ListItemText secondary={todo.description} />
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
          ))
        }
      </List>
    </Grid >
  )
}
