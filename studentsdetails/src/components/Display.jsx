import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import StudentsList from './StudentsList/StudentsList'
import StudentsInputs from './StudentsInputs/StudentsInputs'

export const Display = () => {
  return (
    <div>
        <BrowserRouter>
            <Router>
                <Route path='/' element={<StudentsList />} />
                <Route path='/input' element={<StudentsInputs />} />
            </Router>
        </BrowserRouter>
    </div>
  )
}
