import React from "react";

interface ContextList {
    company:string
    setCompany: (value:string) =>void;

    page:number
    setPage: (number) =>void;
}

export const MyContext = React.createContext<ContextList>({
    company:"",
    setCompany: () =>{},

    page:1,
    setPage: () =>{},
})

export const MyContextProvider = props =>{
    const {children} = props
    const [company, setCompany ] = React.useState('Lemoncode');
    const [page, setPage ] = React.useState(1);



    return (
        <MyContext.Provider value={{company: company, setCompany:setCompany ,page, setPage}}>
            {children}
        </MyContext.Provider>
    );
};
