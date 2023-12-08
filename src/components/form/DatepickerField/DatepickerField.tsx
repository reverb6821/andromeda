import {  useField } from "formik";
import * as React from "react";
import DatePicker from "react-datepicker";

interface DatePickerProps {
    name: string,
}
const Datepicker: React.FC<DatePickerProps> =({ name })=>{
    const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;
return(
    <DatePicker
    {...field}
    selected={value}
    onChange={(date) => setValue(date)}
  />
)}

export default Datepicker