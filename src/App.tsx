import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import AddHabitForm from './components/add-habit-form'
import { Container, Typography } from '@mui/material'
import HabitsList from './components/habits-list'
import HabitsStat from './components/habits-stat'

function App() {
  return (
    <Provider store={store}>
        <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" sx={{ color: '#0000FF', fontWeight: 'bold' }}>Habit Tracker</Typography>
            <AddHabitForm />
            <HabitsList />
            <HabitsStat />
        </Container>
    </Provider>
  )
}

export default App
