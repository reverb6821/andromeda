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
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear", disabled: true },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" }
  ];
  
  return (
    <SelectField
        label='country'
        name="country"
        isMulti={true}
        options={options}
    />
  );
};
export default SelectFieldEx;
```
#### Arguments
