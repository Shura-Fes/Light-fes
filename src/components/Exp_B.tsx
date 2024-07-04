import ReactMarkdown from "react-markdown"
import content from "../assets/markdowns/exp_b.md?raw"

export const Exp_B = () => {
    const result = content.replace("@image1_url", image1)
    return <>
        <ReactMarkdown>
            {result}
        </ReactMarkdown>
    </>
}