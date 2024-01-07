import { Canvas, Meta } from "@storybook/blocks";
import SelectField from '../SelectField';
import * as SelectFieldStory from './SelectField.stories.tsx"" ;

<Meta of={SelectFieldStory} title="SelectField" />

# SelectField

SelectField component with different props.

<Canvas of={SelectFieldStory.SelectFieldExample} />

## Usage

```ts
import SelectField from '@/components/form/SelectField/SelectField';

const SelectFieldEx = () => {
  return (
    <SelectField
        label='country'
        name="country"
        isMulti={true}
        options={countryOptions}
    />
  );
};
export default SelectFieldEx;
```
#### Arguments
