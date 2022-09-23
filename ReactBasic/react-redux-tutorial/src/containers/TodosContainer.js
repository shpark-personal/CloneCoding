import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions'

const TodosContainer = () =>{
    const {input, todos} = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch])
    const onToggle = useCallback(text => dispatch(toggle(text)), [dispatch])
    const onRemove = useCallback(text => dispatch(remove(text)), [dispatch])
    return (
        <Todos input = {input}
                todos={todos}
                onChangeInput={onChangeInput}
                onInsert={onInsert}
                onToggle={onToggle}
                onRemove={onRemove} />
    );
 };

 export default TodosContainer;