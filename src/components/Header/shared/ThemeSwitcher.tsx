import * as React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { toggleMode } from "@/store/reducer/theme.reducer";
import { RootState } from "@/store/store";

const ThemeSwitcher = () => {
    const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;
    const dispatch = useDispatch();
    const toggleModeHandler = () => {dispatch(toggleMode());};

    return(
        <React.Fragment>
             <button 
                type="button"
                className="text-slate-300 bg-headline-secondary rounded-lg text-sm w-10 h-10 inline-flex justify-center items-center shadow-sm"
                onClick={toggleModeHandler}
            >
                {isDarkMode === true ? (<i className="ri-moon-line"/>): (<i className="ri-sun-line"/>)}
            </button>
        </React.Fragment>
    )
}

export default ThemeSwitcher