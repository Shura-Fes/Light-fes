import { useEffect, useState } from "react"
import { checkCleared, clearContent, resetCleared } from "../oparateStrage"
import { Main_KV } from "./Main_KV"
import { Ninetable_KV } from "./Ninetable_KV"

export const Portal = () => {

    const [clearingA, setClearingA] = useState(checkCleared("A"))
    const [clearingB, setClearingB] = useState(checkCleared("B"))
    const [clearingN, setClearingN] = useState(checkCleared("N"))

    useEffect(() => {
        const url = new URL(window.location.href)
        const code = url.hash ? url.hash.length > 8 ? url.hash.replace("#/?code=", "") : "" : "";

        if (code === ("eigogieGaek6lai8")) {
            clearContent("A")
            setClearingA(true)
        } else if (code === ("aish3zaiPhaiwa0U")) {
            clearContent("B")
            setClearingB(true)
        } else if (code === ("Oopeir1iedohrai0")) {
            clearContent("N")
            setClearingN(true)
        } else if (code === ("DieV8yiiPahtooqu")) {
            resetCleared()
            setClearingA(false)
            setClearingB(false)
            setClearingN(false)
        }
    }, [])
    useEffect(() => {
        console.log({ clearingA, clearingB, clearingN })
    }, [clearingA, clearingB, clearingN])

    return <>
        <Main_KV
            clearingA={clearingA}
            clearingB={clearingB}
        />
        <Ninetable_KV clearingN={clearingN} />
        {clearingA || clearingB || clearingN || <div>未クリア</div>}
    </>
}