import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
