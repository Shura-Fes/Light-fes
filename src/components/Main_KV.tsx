import keyVisualGray from "../assets/keyvisual/syurasai_gray.avif?url"
import keyVisualSankasha from "../assets/keyvisual/syurasai_sankasha.avif?url"
import keyVisualWara from "../assets/keyvisual/syurasai_wara.avif?url"
import keyVisualColor from "../assets/keyvisual/syurasai_color.avif?url"
import { Link } from "react-router-dom"

import a_banner from "../assets/banners/a_exp_banner.avif"
import b_banner from "../assets/banners/b_exp_banner.avif"

import "./Main_KV.css"


type Props = {
    clearingA: boolean
    clearingB: boolean
}

const bannerStyles = {
    width: "250px"
}

export const Main_KV = ({ clearingA, clearingB }: Props) => {
    const keyVisual = getKV(clearingA, clearingB)
    return <div style={{ marginBottom: "10px" }}>
        <img src={keyVisual} style={{ objectFit: "contain", maxWidth: "100%" }} />
        <div>
            <Link to={clearingA ? "ExpA_aiya1iZe" : ""} className={clearingA ? "" : "disable-link"}>
                <img src={a_banner} style={bannerStyles} alt="参加者サイド解説" />
            </Link>
            <Link to={clearingB ? "ExpB_Gaiph9Ol" : ""} className={clearingB ? "" : "disable-link"}>
                <img src={b_banner} style={bannerStyles} alt="制作者サイド解説" />
            </Link>
        </div>
        <div>
            {clearingA && clearingB && <div style={{ color: "red" }}>２つのサイドをクリアしたので『回らない当日運営』に参加可能です！</div>}
            {clearingA && clearingB && <div>参加するには、『回らない当日運営』を予約して、呼ばれたらこの画面をブースで見せてください！</div>}
        </div>
    </div>
}


const getKV = (clearingA: boolean, clearingB: boolean) => {
    if (clearingA && clearingB) return keyVisualColor;
    if (clearingA) return keyVisualSankasha
    if (clearingB) return keyVisualWara
    return keyVisualGray
}
