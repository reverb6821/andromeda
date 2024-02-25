import * as React from 'react';
import { Helmet } from 'react-helmet';

import Badge from '@/components/Badge/Badge';
import FlexContainer from '@/components/FlexContainer/FlexContainer';

const Home: React.FC = () => {
    return(
        <React.Fragment>
            <Helmet>
                <title>Andromeda - Home</title>
                <meta name="home" content="A description of my amazing React app" />
            </Helmet>
            Home Component
            <FlexContainer direction='column'>
                <FlexContainer direction='row'>
                    <Badge badgeStyle='secondary--info' label='Lorem Ipsum Dolor sit amet'  />
                    <Badge badgeStyle='secondary--info' label='Lorem Ipsum Dolor sit amet' icon='ri-error-warning-line' />
                </FlexContainer>

            </FlexContainer>
        </React.Fragment>
)};

export default Home