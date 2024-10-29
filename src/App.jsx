import React, { useEffect, useState } from 'react'
import Routers from './routers/Routers'
import { LangProvider } from './context/LangContext'
import { ModeProvider } from './context/ModeContext'
import Preloader from './components/Preloader'

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
        </LangProvider>
      </ModeProvider>
    </>
  )
}
export default App




