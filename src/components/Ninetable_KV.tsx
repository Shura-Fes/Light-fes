import keyVisualGray from "../assets/keyvisual/ninetable_gray.png?url"
import keyVisualColor from "../assets/keyvisual/ninetable_color.png?url"


type Props = {
    clearingN: boolean
}

export const Ninetable_KV = ({ clearingN }: Props) => {
    const keyVisual = getKV(clearingN)
    return <>
    <div>小部屋13コンテンツ！</div>
    <div>NINE TABLEさん</div>
    <div>あの、この謎持ってませんか？</div>
    <div>修羅祭実行委員会コンテンツのあとにいかがですか？</div>
        <img src={keyVisual} style={{ objectFit: "contain", maxWidth: "100%" }} />
    </>
}


const getKV = (clearingN: boolean) => {
    if (clearingN) return keyVisualColor;
    return keyVisualGray
}
