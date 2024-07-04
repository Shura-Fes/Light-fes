import keyVisualGray from "../assets/keyvisual/syurasai_gray.avif?url"
import keyVisualSankasha from "../assets/keyvisual/syurasai_sankasha.avif?url"
import keyVisualWara from "../assets/keyvisual/syurasai_wara.avif?url"
import keyVisualColor from "../assets/keyvisual/syurasai_color.avif?url"
import { Link } from "react-router-dom"


type Props = {
    clearingA: boolean
    clearingB: boolean
}

export const Main_KV = ({ clearingA, clearingB }: Props) => {
    const keyVisual = getKV(clearingA, clearingB)
    return <div style={{ marginBottom: "10px" }}>
        <img src={keyVisual} style={{ objectFit: "contain", maxWidth: "100%" }} />
        <div>
            {clearingA && <Link to={"ExpA_aiya1iZe"}>参加者サイド解説</Link>}
            {clearingA && clearingB && "／"}
            {clearingB && <Link to={"ExpB_Gaiph9Ol"}>制作者サイド解説</Link>}
        </div>
        <div>
            {clearingA && clearingB && <div style={{ color: "red" }}>２つのサイドをクリアしたので『回らない当日コンテンツ』に参加可能です！</div>}
            {clearingA && clearingB && <div>参加するには〇〇〇〇</div>}
        </div>
    </div>
}


const getKV = (clearingA: boolean, clearingB: boolean) => {
    if (clearingA && clearingB) return keyVisualColor;
    if (clearingA) return keyVisualSankasha
    if (clearingB) return keyVisualWara
    return keyVisualGray
}
