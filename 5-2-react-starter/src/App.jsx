import './App.css'
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
            <div>
                <h1>Student Info</h1>


                <StudentCard
                    name="Alice Johnson"
                    id="202301"
                    dept="Computer Science"
                />

                <StudentCard
                    name="Mohammed Ali"
                    id="202302"
                    dept="Electrical Engineering"
                />
            </div>
        </div>
      </main>
    </div>
  )
}

export default App
