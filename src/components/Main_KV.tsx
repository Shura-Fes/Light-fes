import keyVisualGray from "../assets/keyvisual/syurasai_gray.png?url"
import keyVisualSankasha from "../assets/keyvisual/syurasai_sankasha.png?url"
import keyVisualWara from "../assets/keyvisual/syurasai_wara.png?url"
import keyVisualColor from "../assets/keyvisual/syurasai_color.png?url"
import { Link } from "react-router-dom"


type Props = {
    clearingA: boolean
    clearingB: boolean
}

export const Main_KV = ({ clearingA, clearingB }: Props) => {
    const keyVisual = getKV(clearingA, clearingB)
    return <>
        <img src={keyVisual} style={{ objectFit: "contain" }} />
        {clearingA && <Link to={"ExpA_aiya1iZe"}>参加者サイド解説</Link>}
        {clearingB && <Link to={"ExpB_Gaiph9Ol"}>制作者サイド解説</Link>}
    </>
}


const getKV = (clearingA: boolean, clearingB: boolean) => {
    if (clearingA && clearingB) return keyVisualColor;
    if (clearingA) return keyVisualSankasha
    if (clearingB) return keyVisualWara
    return keyVisualGray
}