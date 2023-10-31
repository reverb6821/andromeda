### example of button usage

props accepted
* btnStyle: chhose button style (primary, secondary, alert, warn, success)
* label: string,
* isLoading?: boolean, make condition to set loader while action is running
* icon?: string,
* disabled?: boolean, boolean, make condition to set disable while action or condition is running
* onBtnClick: (event: React.MouseEvent) => void,

```
import * as React from 'react'
impoer Button from '@/components/button/Button'

const ButtonExample: React.FC =()=> {
    return(
        <React.Fragment>
            <Button
                onBtnClick={(event: React.MouseEvent) => {
                  alert('You clicked that button!');
                }}
                primary
                isLoading={}
                disabled={}
                label='label example'
            />
        </React.Fragment>
    )
}
```
