import { TodosLayout } from '../../layout/TodosLayout';
import { InputCreateTodo } from '../components';
import { ListTodo } from '../components/ListTodo';
import { TodoProvider } from '../../context/TodoProvider';

export const TodosPage = () => {
  return (
    <TodoProvider>
      <TodosLayout>
        <InputCreateTodo />
        <ListTodo />
      </TodosLayout>
    </TodoProvider>
  )
}
