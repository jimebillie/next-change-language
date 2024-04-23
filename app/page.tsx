import {get_lang} from "@/app/lang/conf_lang";

export default function Home() {
    /**
     * -------------------------------------------
     * # Get language
     * -------------------------------------------
     * @desc -
     *
     */
    const lang: any = get_lang();

    return (
        <>
            <div>
                {lang.select_language} : <a href={"/change/lang/en"}>{lang.en}</a> , <a
                href={"/change/lang/th"}>{lang.th}</a>
            </div>
            <div>
                <b className="text-zinc-800 mr-2">
                    {lang.example_text} :
                </b>
                <span>
                    {lang.text}
                </span>
            </div>
        </>
    );
}
