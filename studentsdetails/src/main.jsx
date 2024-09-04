import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentProvider from './context/StoreContext.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StudentProvider>
      <ToastContainer/>
      <App />
    </StudentProvider>
)
