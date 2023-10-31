import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

import ModalContainer from '@/components/modal/ModalContainer';
import Grid from '@/components/ui/Grid';
import { RootState } from "@/store/store";

import FormExample from './components/form/FormExample';
//  import Table from './components/table/Table';
import Footer from './components/ui/footer/Footer';
import Header from './components/ui/navigation/Header';

const App: React.FC  =()=> {
  const { t } = useTranslation();
  const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;

  const  headerEl = [{label: 'uno', route: 'uno'},{label: 'due', route: 'due'}]
  return (
    <React.Fragment>
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Header headerTitle='test title' headerEl={headerEl}/>

        <Grid direction='column' classNames='m-auto items-center justify-center dark:bg-slate-600'>
          <Grid direction='column'>
            <Grid direction='row'>
              <p className='text-color'>{t('placeholder')} <hr/>
                {t('date', { date: new Date() })}
              </p>
            </Grid>
            <Grid direction='row'>
              <ModalContainer />
            </Grid>
          </Grid>
          <FormExample />
          {/* <Table /> */}
        </Grid>
        <Footer footerTitle='ciao' footerEl={headerEl} />
    </div>
    </React.Fragment>
  )
}

export default App
