import * as React from 'react';
import { Helmet } from 'react-helmet';

import Badge from '@/components/Badge/Badge';
import FlexContainer from '@/components/FlexContainer/FlexContainer';
import Tooltip from '@/components/Tooltip/Tooltip';
import Alert from '@/components/Alert/Alert';
import Accordion from '@/components/Accordion/Accordion';
import Header from '@/components/Header/Header';
import Button from '@/components/Button/Button';
import Logo from '@/assets/img/logo-placeholder-image.png'

const Home: React.FC = () => {
    const headerEl = [{ label: 'Home', route: '/' }, { label: 'Form', route: '/form' }]
    return (
        <React.Fragment>
            <Helmet>
                <title>Andromeda - Home</title>
                <meta name="home" content="A description of my amazing React app" />
            </Helmet>
            <Header
                headerLogo={Logo}
                headerTitle='Andromeda'
                headerSubTitle='A Component Collection'
                headerEl={headerEl}
            />
            <FlexContainer direction='column' className='bg-slate-200 dark:bg-slate-700'>
                <p>Home Component</p>
                <FlexContainer direction='row'>
                    <Badge badgeStyle='secondary--info' label='Lorem Ipsum Dolor sit amet' />
                    <Badge badgeStyle='secondary--info' label='Lorem Ipsum Dolor sit amet' icon='ri-error-warning-line' />
                </FlexContainer>
                <FlexContainer direction='row'>
                    <Tooltip content='ciao' direction='bottom' />
                    <Alert title='DANGER' alertStyle='success' message='Lorem Ipsum' icon='ri-error-warning-line' />
                </FlexContainer>
                <Accordion title='ciao' message='ciao' icon='ri-school-line' subtitle='ciaoooooo' />
                <FlexContainer direction='row'>
                    <Button
                        onBtnClick={() => {
                            alert('You clicked that button!');
                        }}
                        btnStyle='primary'
                        type="submit"
                        label='Btn Example'
                        disabled={false}
                         />
                    <Button
                        onBtnClick={() => {
                            alert('You clicked that button!');
                        }}
                        btnStyle='secondary'
                        type="submit"
                        label='Btn Example'
                        disabled={false}
                         />
                </FlexContainer>
            </FlexContainer>
        </React.Fragment>
    )
};

export default Home