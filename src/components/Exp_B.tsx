import ReactMarkdown from "react-markdown"
import content from "../assets/markdowns/exp_b.md?raw"
import water_skelton from "../assets/markdowns/images/water_skelton.avif?url"
import kenrisho from "../assets/markdowns/images/kenrisho.avif?url"

export const Exp_B = () => {
    const result = content.replaceAll("@water_skelton", water_skelton).replaceAll("@kenrisho", kenrisho)
    return <>
        <ReactMarkdown>
            {result}
        </ReactMarkdown>
    </>
}