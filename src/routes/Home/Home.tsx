import * as React from 'react';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
    return(
        <React.Fragment>
            <Helmet>
                <title>Andromeda - Home</title>
                <meta name="home" content="A description of my amazing React app" />
            </Helmet>
           <button>CLICC </button>
        </React.Fragment>
)};

export default Home