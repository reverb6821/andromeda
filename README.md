# Andromeda

### icon:
* https://remixicon.com/


### button props example
```
<Button 
    label="btn label" // string value
    customAction={() => console.log('custom action')}
    icon="ri-user-line" // it's optional, support only remix icon 
    primary // button type (it's bool value)
    isLoading // bool value, show loader if certain condition is true
    disabled // bool value, disable btn if certain condition is true
/>
```

### select props example
```
  const options = [
    { label: "Label 1", value: "label1" },
    { label: "Label 2", value: "label2" },
  ];


<SelectInput 
    label="btn label" // string value
    options={options} //send an array of key/value object to show inside select
    disabled // bool value, disable btn if certain condition is true
/>
```
