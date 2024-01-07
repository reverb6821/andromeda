import * as React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  
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
    en: { label: 'en', value: 'en' },
    de: { label: 'de', value: 'de' },
    it: { label: 'it', value: 'it' },
    fr: { label: 'fr', value: 'fr' },
    es: { label: 'es', value: 'es' },
  };

  return (
    <React.Fragment>
      <div className='py-4 px-2 w-64 max-md:w-full'>
        <button
          onClick={handleOpen}
          className={`flex justify-between text-color-primary color-secondary cursor-pointer items-center py-2.5 px-2 w-60 text-sm rounded-md p-0.5`}
        >
          <div className="flex flex-row space-x-4 items-center hover:text-slate-600 hover:dark:text-slate-300">
            <i className={`fi fi-${i18n.resolvedLanguage === 'en' ? 'us' : i18n.resolvedLanguage} m-auto text-sm `}></i>
            <span className='uppercase font-bold'>
              {t(`t.app.generic.sidebar.lang.${i18n.language}`)}
            </span>
          </div>

          <div className={`${open ? 'rotate-180' : ''} flex`}>
            <i className={`ri-arrow-down-s-line text-sm`} />
          </div>
        </button>

        {open ? (
          <div className='shadow-md py-2.5 px-2 w-60 text-color-primary color-secondary text-sm rounded-md flex flex-col p-2.5 mt-1 max-md:w-full'>
            <ul >
              {Object.keys(lngs).map((lng) => (
                <li
                  key={lng}
                >
                  <button
                    onClick={() => { i18n.changeLanguage(lng); setOpen(!open); }}
                    className="inline-flex w-full px-4 py-2 text-base hover:font-bold uppercase"
                  >
                    <div className="inline-flex items-center">
                      <i className={`fi fi-${lngs[lng].label === 'en' ? 'us' : lngs[lng].label} mr-2`} />
                      {t(`t.app.generic.sidebar.lang.${lngs[lng].label}`)}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>


    </React.Fragment>

  )
}

export default LanguageSwitcher