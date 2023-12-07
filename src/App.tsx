import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

import ModalContainer from '@/components/modal/ModalContainer';
import Grid from '@/components/ui/Grid/Grid';
import { RootState } from "@/store/store";

import FormExample from './components/form/FormExample';
import Table from './components/Table/Table';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/navigation/Header/Header';
import Typography from './components/ui/Typography/Typography';
import {TABLE_HEAD, TABLE_ROWS} from './mock/table';

const App: React.FC  =()=> {
  const { t } = useTranslation();
  const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;
  const  headerEl = [{label: 'uno', route: 'uno'},{label: 'due', route: 'due'}]

  const tabledata = /*TABLE_ROWS && TABLE_ROWS.length > 1 ?*/ TABLE_ROWS.map((el)=>{
    const obj = {
      id: <p>{el.id}</p>,
      name: el.name,
      email: el.email,
      date: el.date,
      status: el.status
    }
    return Object.values(obj)
  })
  // ) : null;
// console.log(tabledata)
// const tabledata = TABLE_ROWS.map((el) => {
//   el.toString()
// })
console.log('object', tabledata)
  return (
    <React.Fragment>
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Header headerTitle='test title' headerEl={headerEl}/>

        <Grid direction='column' classNames='m-auto items-center justify-center dark:bg-slate-600'>
          <Grid direction='column'>
            <Grid direction='row'>
              <ModalContainer />
            </Grid>
          </Grid>
          <FormExample />
          <Typography textSize='caption' textStyle='secondary' text={t('placeholder')}/> 
          <Typography textSize='caption' textStyle='secondary' text={t('date', { date: new Date() })}/> 

          <Table head={TABLE_HEAD} body={tabledata}  />
        </Grid>
        <Footer footerTitle='ciao' footerEl={headerEl} />
    </div>
    </React.Fragment>
  )
}

export default App
