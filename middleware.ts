import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {conf_lang} from "@/app/lang/conf_lang";
import {redirect} from "next/navigation";

export function middleware(request: NextRequest) {
    /**
     * -------------------------------------------
     * # Ref
     * -------------------------------------------
     * @desc -
     * @ref https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies
     *
     */
    const response: NextResponse = NextResponse.next();
    const _lang: any = request.cookies.has("_lang");
    if (!_lang) {
        response.cookies.set("_lang", "en");
    } else {
        const value_lang: any = request.cookies.get("_lang")?.value;
        if (!conf_lang().includes(value_lang))
            /**
             * -------------------------------------------
             * # Check valid of _lang with conf_lang()
             * -------------------------------------------
             * @desc -
             *
             */
        {
            /**
             * -------------------------------------------
             * # False : set lang default
             * -------------------------------------------
             * @desc - On false set 'en' everytime
             *
             */
            response.cookies.set("_lang", "en");
        }
    }


    if (request.nextUrl.pathname.startsWith('/change/lang/en')) {
        const url: any = request.headers.get("referer") || request.nextUrl.origin
        response.cookies.set("_lang", "en");
        /**
         * -------------------------------------------
         * # Set redirect to referer or original path
         * -------------------------------------------
         * @desc -
         *
         */
    }
    if (request.nextUrl.pathname.startsWith('/change/lang/th')) {
        const url: any = request.headers.get("referer") || request.nextUrl.origin
        response.cookies.set("_lang", "th");
        /**
         * -------------------------------------------
         * # Set redirect to referer or original path
         * -------------------------------------------
         * @desc -
         *
         */
    }
    return response
}