import React, { useEffect, useState } from 'react'
import Routers from './routers/Routers'
import { LangProvider } from './context/LangContext'
import { ModeProvider } from './context/ModeContext'
import Preloader from './components/Preloader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <ModeProvider>
        <LangProvider >
          {loading ? <Preloader /> : <Routers />}
          <ToastContainer />
        </LangProvider>
      </ModeProvider>
    </>
  )
}
export default App




