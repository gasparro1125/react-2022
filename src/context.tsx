import React from "react";

interface ContextList {
    company:string
    setCompany: (value:string) =>void;

    page:number
    setPage: (number) =>void;

    text:string
    setText: (string) =>void;
}

export const MyContext = React.createContext<ContextList>({
    company:"",
    setCompany: () =>{},

    page:1,
    setPage: () =>{},

    text:"",
    setText:()=>{},
})

export const MyContextProvider = props =>{
    const {children} = props
    const [company, setCompany ] = React.useState('Lemoncode');
    const [page, setPage ] = React.useState(1);
    const [text, setText] = React.useState('');



    return (
        <MyContext.Provider value={{company: company, setCompany:setCompany ,page, setPage,text,setText}}>
            {children}
        </MyContext.Provider>
    );
};
