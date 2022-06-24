import { Button, Grid, TextField } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoContext } from '../../context/TodoContext';
import useForm from '../../hooks/useForm';
import { deleteTodo, setTodo } from '../../store/slices/todosSlice';

export const InputCreateTodo = () => {

  const dispatch = useDispatch();
  const { formState, onInputChange } = useForm({});
  const { todos } = useSelector(state => state.todos);
  const { todo, setTodoModify } = useContext( TodoContext );

  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) || []}, [todos]);

  const createOrUpdateTodo = () => {

    if( todo === undefined ){
      const newTodo = { id: new Date().getTime(), ...formState, done: false };
      dispatch(setTodo(newTodo));
      console.log('Crete new todo');
    }else{
      dispatch(deleteTodo( todo.id ));
      const todoModify = {...formState, id : todo.id, done: todo.done}      
      dispatch(setTodo(todoModify));
      setTodoModify(undefined);
    }

  }


  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sx={{ display: 'flex' }} >
        <TextField
          fullWidth
          type="text"
          variant="outlined"
          placeholder="Create a new todo"
          onChange={ onInputChange }
          onBlur={ (event) => event.target.value = '' }
          name="description"
        />
        <Button
          variant="contained"
          sx={{ ml: 2 }}
          onClick={createOrUpdateTodo}
        >
          { todo?.description ? 'Update' : 'Create' }
        </Button>
      </Grid>
    </Grid>
  )
}
