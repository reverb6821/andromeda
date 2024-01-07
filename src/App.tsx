import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

import Logo from '@/assets/logo-placeholder-image.png'
import Grid from '@/components/ui/Grid/Grid';
import { RootState } from "@/store/store";

// import FormExample from './components/form/FormExample';
import Badge from './components/partials/badge/Badge';
import Table from './components/Table/Table';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/navigation/Header/Header';
import Sidebar from './components/ui/navigation/SideNav/Sidebar';
import Typography from './components/ui/Typography/Typography';
import { TABLE_HEAD, TABLE_ROWS } from './mock/table';

const App: React.FC = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;
  const headerEl = [{ label: 'Login', route: 'uno' }, { label: 'Register', route: 'due' }]

  const SIDENAV_ITEMS = [
    {
      title: 'Home',
      path: '/',
      //   icon: <Icon icon="lucide:home" width="24" height="24" />,
      icon: 'ri-dashboard-line',

    },
    {
      title: 'Projects',
      path: '/projects',
      icon: 'ri-dashboard-line',
      submenu: true,
      subMenuItems: [
        { title: 'All', path: '/projects' },
        { title: 'Web Design', path: '/projects/web-design' },
        { title: 'Graphic Design', path: '/projects/graphic-design' },
      ],
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: 'ri-dashboard-line',
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: 'ri-dashboard-line',
      submenu: true,
      subMenuItems: [
        { title: 'Account', path: '/settings/account' },
        { title: 'Privacy', path: '/settings/privacy' },
      ],
    },
    {
      title: 'Help',
      path: '/help',
      icon: 'ri-dashboard-line',
    },
  ];

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
        </Sidebar>
        {/* <Footer footerTitle='ciao' footerEl={headerEl} /> */}
      </div>
    </React.Fragment>
  )
}

export default App
