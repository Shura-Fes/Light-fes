import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { checkCleared, clearContent, resetCleared } from "../oparateStrage"

export const Portal = () => {

    const [clearingA, setClearingA] = useState(checkCleared("A"))
    const [clearingB, setClearingB] = useState(checkCleared("B"))
    const [clearingN, setClearingN] = useState(checkCleared("N"))

    useEffect(() => {
        const url = new URL(window.location.href)
        const hash = url.hash;

        if (hash.includes("eigogieGaek6lai8")) {
            clearContent("A")
            setClearingA(true)
        } else if (hash.includes("aish3zaiPhaiwa0U")) {
            clearContent("B")
            setClearingB(true)
        } else if (hash.includes("Oopeir1iedohrai0")) {
            clearContent("N")
            setClearingN(true)
        } else if (hash.includes("DieV8yiiPahtooqu")) {
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
        {clearingA && <div>A くりあずみ</div>}
        {clearingB && <div>B くりあずみ</div>}
        {clearingN && <div>N くりあずみ</div>}
        {clearingA || clearingB || clearingN || <div>未クリア</div>}
    </>
}