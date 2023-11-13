//import react stuff
import React, { useState, useEffect } from "react";
// import {classnames} from '../utils/general'
import {languageOptions} from '../constants/languageOptions'
//import components
import CodeEditorWindow from "./CodeEditorWindow";
//import OutputWindow from './OutputWindow';
//import CustomInput from './CustomInput'
//import ThemeDropdown from './ThemeDropdown'
import LanguagesDropdown from './LanguagesDropdown'


const javascriptDefault = `// some comment`;

const EditorLandingPage = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState(languageOptions[0]);

  const onSelectChange = (sl: any) => {
    console.log("select Option...", sl);
    setLanguage(sl);
  };
    
  const onChange = (action: any, data: React.SetStateAction<string>) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
    
  //need function that handles compling
  const handleCompile = () => {};
  //need function to allow theme changes
  const handleThemeChange = (th) => {};
  //status checking function
  const checkStatus = async (token) => {};

  return (
    <>
      
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
          
          <div className="flex flex-col w-full h-full justify-start items-end">
        <CodeEditorWindow
          code={code}
          onChange={onChange}
          language={language?.value}
          theme={theme.valueOf}
        />
      </div>
    </>
  );
};

export default EditorLandingPage;
