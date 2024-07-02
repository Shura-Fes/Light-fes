import { useEffect } from "react"
import { Link } from "react-router-dom"
import { checkCleared, clearContent, resetCleared } from "../oparateStrage"

export const Portal = () => {
    useEffect(() => {
        const url = new URL(window.location.href)
        const hash = url.hash;

        if (hash.includes("eigogieGaek6lai8")) {
            clearContent("A")
        } else if (hash.includes("aish3zaiPhaiwa0U")) {
            clearContent("B")
        } else if (hash.includes("Oopeir1iedohrai0")) {
            clearContent("N")
        }
    }, [])

    const clearingA = checkCleared("A")
    const clearingB = checkCleared("B")
    const clearingN = checkCleared("N")

    return <>
        {clearingA && <div>A くりあずみ</div>}
        {clearingB && <div>B くりあずみ</div>}
        {clearingN && <div>N くりあずみ</div>}
        {clearingA || clearingB || clearingN || <div>未クリア</div>}
        <Link to={"Exp3_ouBa4eng"}>解説C</Link>
        <button onClick={() => resetCleared()}>Reset(debug)</button>
    </>
}