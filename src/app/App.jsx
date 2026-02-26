import Todo from '../widgets/Todo/Todo.jsx'
import { TasksProvider } from '@/entities/todo/model/TasksContext.jsx'
import './styles'

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App
