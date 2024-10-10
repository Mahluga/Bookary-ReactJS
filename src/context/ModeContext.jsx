import { createContext, useState } from "react";

export const ModeContext = createContext([])


export const ModeProvider = (props) => {
    const localMode = localStorage.getItem('mode') ?? "light";
    const [mode, setMode] = useState(localMode);
    return (
        <ModeContext.Provider value={[mode, setMode]}>
            {props.children}
        </ModeContext.Provider>
    )
}