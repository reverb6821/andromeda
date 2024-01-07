import * as React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { toggleMode } from "@/store/reducer/theme.reducer";
import { RootState } from "@/store/store";

const ThemeSwitcher:React.FC = () => {
    const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;
    const dispatch = useDispatch();
    const toggleModeHandler = () => {dispatch(toggleMode());};

    return(
        <React.Fragment>
             <button 
                type="button"
                className="text-color-primary bg-slate-300 dark:bg-slate-600 rounded-lg text-sm w-10 h-10 inline-flex justify-center items-center"
                onClick={toggleModeHandler}
            >
                {isDarkMode === true ? (<i className="ri-moon-line"/>): (<i className="ri-sun-line"/>)}
            </button>
        </React.Fragment>
    )
}

export default ThemeSwitcher