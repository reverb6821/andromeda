import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

import Logo from '@/assets/logo-placeholder-image.png'
import Grid from '@/components/ui/Grid/Grid';
import { RootState } from "@/store/store";

// import FormExample from './components/form/FormExample';
import Button from './components/button/Button';
import Cards from './components/cards/Cards';
import ModalContainer from './components/modal/ModalContainer';
import Sidebar from './components/ui/navigation/Sidebar/Sidebar';
import Typography from './components/ui/Typography/Typography';
import { SIDENAV_ITEMS } from './mock/sidebar';

const App: React.FC = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;
  // const headerEl = [{ label: 'Login', route: 'uno' }, { label: 'Register', route: 'due' }]



  // const tabledata = TABLE_ROWS.map((el)=>{
  //  return [
  //     el.id,
  //     el.name,
  //     el.email,
  //     el.title,
  //     el.department,
  //     <Badge label={el.status} badgeStyle={el.status === 'Active' ? 'primary--success' : 'primary--alert'}/>,
  //     el.role,
  //     el.age,
  //     <img className="w-10 h-10 rounded-full" src={el.imgUrl} alt="Jese image" />
  //   ]
  // })

  return (
    <React.Fragment>
      <div className={`App w-full ${isDarkMode ? "dark" : ""}`}>
        {/* <Header
          headerLogo={Logo}
          headerTitle='Andromeda'
          headerSubTitle='A Component Collection'
          headerEl={headerEl}
          /> */}

        <Sidebar
          items={SIDENAV_ITEMS}
          sidebarLogo={Logo}
          sidebarTitle='Andromeda'
          sidebarSubTitle='Component Collection'
        >
          <Grid direction='column' classNames='items-center justify-center dark:bg-slate-600'>
            <Typography textSize='caption' textStyle='secondary' text={t('placeholder')} />
            <Typography textSize='caption' textStyle='secondary' text={t('date', { date: new Date() })} />
            <ModalContainer />
            <Button
              onBtnClick={() => {
                alert('You clicked that button!');
              }}
              btnStyle='primary--alert'
              type="submit"
              label='Btn Example'
              disabled={false}
              isLoading={true} />
            {/* <FormExample /> */}
            {/* <Table
            model='test'
            columns={TABLE_HEAD}
            rows={tabledata}
            onEdit={()=>{alert('edit clic')}}
            onDelete={(id: number)=>{removeUser(id)}}
            emptyTable={()=>{alert('empty')}}
          /> */}
          </Grid>
              <Cards
              title='With Image'
              subtitle='lorem ipsum dolor sit amet'
              action={()=>console.log('object')}
              actionLabel='goo oon'
              image='https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1800&t=st=1705248476~exp=1705249076~hmac=237ae4f5bd39e27e61c01481c4d5ecd47bda3d243e3c39047225d14083d38a1d'
              />

            
            <Cards
              title='No Image'
              subtitle='lorem ipsum dolor sit amet'
              action={()=>console.log('object')}
              actionLabel='goo oonss'
              />
        </Sidebar>
        {/* <Footer footerTitle='ciao' footerEl={headerEl} /> */}
      </div>
    </React.Fragment>
  )
}

export default App
