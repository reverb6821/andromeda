### example of modal usage

props accepted
* primary:  bool use to define the nature of badge
* secondary: bool use 
* alert: bool use 
* success: bool use 
* warning: bool use 
* label: string

```
import * as React from 'react'
import Badge from '@/components/partials/Badge'

const BadgeExample: React.FC =()=> {
    return(
        <React.Fragment>
            <Badge
                primary
                label= 'Label Example'
            />
        </React.Fragment>
    )
}
```