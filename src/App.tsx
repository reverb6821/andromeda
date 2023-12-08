import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

import ModalContainer from '@/components/modal/ModalContainer';
import Grid from '@/components/ui/Grid/Grid';
import { RootState } from "@/store/store";

import FormExample from './components/form/FormExample';
import Badge from './components/partials/badge/Badge';
import Table from './components/Table/Table';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/navigation/Header/Header';
import Typography from './components/ui/Typography/Typography';
import {TABLE_HEAD, TABLE_ROWS} from './mock/table';

const App: React.FC  =()=> {
  const { t } = useTranslation();
  const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;
  const  headerEl = [{label: 'uno', route: 'uno'},{label: 'due', route: 'due'}]

  const tabledata = TABLE_ROWS.map((el)=>{
    const obj = {
      id: el.id,
      name: el.name,
      email: el.email,
      title: el.title,
      department: el.department,
      status:<Badge label={el.status} badgeStyle={el.status === 'Active' ? 'primary--success' : 'primary--alert'}/>,
      role: el.role,
      age: el.age,
      imgUrl: <img className="w-10 h-10 rounded-full" src={el.imgUrl} alt="Jese image" />
    }
    return Object.values(obj)
  })

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
          {/* <FormExample /> */}

          <Table
          head={TABLE_HEAD}
          body={tabledata}
          rowsPerPage={5}
          onEdit={()=>{console.log('edit')}}
          onDelete={()=>{console.log('delete')}}
          />
        </Grid>
        <Typography textSize='caption' textStyle='secondary' text={t('placeholder')}/> 
        <Typography textSize='caption' textStyle='secondary' text={t('date', { date: new Date() })}/> 
        <Footer footerTitle='ciao' footerEl={headerEl} />
    </div>
    </React.Fragment>
  )
}

export default App
