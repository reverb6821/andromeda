import { Canvas, Meta } from "@storybook/blocks";
import CustomSelect from './CustomSelect';
import * as SelectFieldStory from './SelectField.stories.tsx"" ;

<Meta of={SelectFieldStory} title="CustomSelect" />

# CustomSelect

CustomSelect component with different props.

<Canvas of={SelectFieldStory.CustomSelectExample} />

## Usage

```ts
import CustomSelect from '@/components/form/SelectField/CustomSelect';

const CustomSelectEx = () => {
  return (
    <CustomSelect
        label='country'
        name="country"
        isMulti={true}
        options={countryOptions}
    />
  );
};
export default CustomSelectEx;
```
#### Arguments
