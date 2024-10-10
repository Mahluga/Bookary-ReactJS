import React from 'react'
import Routers from './routers/Routers'
import { LangProvider } from './context/LangContext'

const App = () => {
    return (
        <>
            <LangProvider >
                <Routers />
            </LangProvider>
        </>
    )
}
export default App