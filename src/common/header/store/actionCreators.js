import {SEARCH_FOCUS,SEARCH_BLUR} from "./actionTypes.js"

// export const searchFocus = (value) => {
//     return {
//         type:SEARCH_FOCUS
//     }  
// }
export const searchFocus = (value) => ({
    type:SEARCH_FOCUS
})
export const searchBlur = (value) => ({
    type:SEARCH_BLUR
})