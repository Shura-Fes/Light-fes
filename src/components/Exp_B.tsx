import ReactMarkdown from "react-markdown"
import content from "../assets/markdowns/exp_b.md?raw"
import water_skelton from "../assets/markdowns/images/water_skelton.avif"
import kenrisho from "../assets/markdowns/images/kenrisho.avif"

export const Exp_B = () => {
    console.log(water_skelton)
    console.log(kenrisho)
    const result = content.replaceAll("@water_skelton", water_skelton).replaceAll("@kenrisho", kenrisho)
    return <div style={{ maxWidth: "100%" }}>
        <ReactMarkdown>
            {result}
        </ReactMarkdown>
    </div>
}