import ReactMarkdown from "react-markdown"
import content from "../assets/markdowns/exp_b.md?raw"
import water_skelton from "../assets/markdowns/images/water_skelton.avif?url"

export const Exp_B = () => {
    console.log(water_skelton)
    const result = content.replaceAll("@water_skelton", water_skelton)
    return <>
        <ReactMarkdown>
            {result}
        </ReactMarkdown>
    </>
}