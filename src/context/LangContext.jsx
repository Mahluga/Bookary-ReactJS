import { createContext, useState } from "react";

export const LangContext = createContext([])


export const LangProvider = (props) => {
    const localLang = localStorage.getItem('lang');
    const [lang, setLang] = useState(localLang);
    return (
        <LangContext.Provider value={[lang, setLang]}>
            {props.children}
        </LangContext.Provider>
    )
}