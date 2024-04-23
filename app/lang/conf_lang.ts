import {cookies} from "next/headers";
import en from "@/app/lang/en";
import th from "@/app/lang/th";

export function conf_lang() {
    /**
     * -------------------------------------------
     * # Set key language
     * -------------------------------------------
     * @desc -
     *
     */
    return [
        "en", "th"
    ]
}

export function get_lang() {
    /**
     * -------------------------------------------
     * # Get value language
     * -------------------------------------------
     * @desc -
     *
     */
    switch (cookies().get("_lang")?.value) {
        case "en" :
            return en
        case  "th" :
            return th
        default:
            return en;
    }
}