import { React, useState, useContext, createContext, useEffect} from 'react';

const CodeEditorContext = createContext({})

export function CodeEditorContextProvider({children}) {

  const [projectColor, setProjectColor] = useState('#6BD1FF');
  const [language, setLanguage] = useState('javascript');
  const [inputCode, setInputCode] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  function handleChangeColor(newColor) {
    setProjectColor(newColor)
  }


  return (
    <CodeEditorContext.Provider
      value={{
        projectColor,
        language,
        inputCode,
        projectTitle,
        projectDescription,
        setProjectColor,
        setLanguage,
        setInputCode,
        setProjectTitle,
        setProjectDescription,

        handleChangeColor
      }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
}

const useCodeEditorContext = () => useContext(CodeEditorContext)


export default useCodeEditorContext;

