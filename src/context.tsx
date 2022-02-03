import React from "react";

interface ContextList {
    company:string
    setCompany: (value:string) =>void;
}

export const MyContext = React.createContext<ContextList>({
    company:"Lemoncode",
    setCompany: () =>{},
})

export const MyContextProvider = props =>{
    const {children} = props
    const [company, setCompany ] = React.useState('Lemoncode');



    return (
        <MyContext.Provider value={{company: company, setCompany:setCompany}}>
            {children}
        </MyContext.Provider>
    );
};
