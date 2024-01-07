import {Props} from "react-select";

export interface SelectFieldProps extends Props{
    name : string,
    label? : string,
    isMulti: boolean,
    disabled?: boolean,
    help?: string,
    sendValue? : (event: React.MouseEvent) => void,
}
