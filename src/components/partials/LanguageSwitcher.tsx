import * as React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  
  type LanguagesType = {
    [key: string]: LanguagesItemType;
  }

  type LanguagesItemType = {
    [key: string]: string;
  }

  const lngs: LanguagesType = {
    en: { label: 'en', value: 'de' },
    de: { label: 'de', value: 'de' },
    it: { label: 'it', value: 'it' },
    fr: { label: 'fr', value: 'fr' },
    es: { label: 'es', value: 'es' },
  };

  return(
    <React.Fragment>
      <div className="inline-block relative"> 
          <button
            onClick={handleOpen}
            className='bg-slate-300 dark:bg-slate-600 text-color-primary font-semibold py-2 px-4 rounded inline-flex items-center'
          >
            <span className="mr-1 uppercase">
              <i className={`fi fi-${i18n.resolvedLanguage === 'en' ? 'us' : i18n.resolvedLanguage}`}/> {i18n.language}
            </span>
            <i className="ri-arrow-down-s-line text-color-primary text-md"></i>
          </button>
          {open ? (
              <ul className='bg-slate-300 dark:bg-slate-600 absolute text-color-primary pt-1 rounded items-center shadow-lg p-2 mt-1 z-10'>
                {Object.keys(lngs).map((lng) => (
                  <li
                    key={lng}
                    className=''
                  >
                    <button
                      onClick={() => {i18n.changeLanguage(lng); setOpen(!open);}}
                      className="inline-flex w-full px-4 py-2 text-base hover:font-bold uppercase"
                    >
                      <div className="inline-flex items-center">
                        <i className={`fi fi-${lngs[lng].label === 'en' ? 'us' : lngs[lng].label} mr-2`}/> {lngs[lng].label}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
          ) : null}
      </div>

    </React.Fragment>
  )
}

export default LanguageSwitcher