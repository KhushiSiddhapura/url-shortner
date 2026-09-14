import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './features/dashboard/ui/pages/Dashboard.jsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from './app/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Dashboard />  
    <ToastContainer />
  </Provider>
)
