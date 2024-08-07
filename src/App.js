import React from 'react'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';


const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr"
  },
  {
    code: "en",
    name: "English",
    country_code: "gb"
  },
]

const App = () => {

  const { t } = useTranslation()
  
  return (
    <>
    
      <div>
        {t("Welcome_to_React")}
        {languages.map(({ code, name, country_code })=>{
          return(

            <li key={country_code}>
              <button onClick={()=> i18next.changeLanguage(code)}>
                {name}
              </button>
            </li>
          )

        })}
      </div>
    
    </>
  )
}

export default App