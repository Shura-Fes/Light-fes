import ReactMarkdown from "react-markdown"
import content from "../assets/markdowns/exp_b.md?raw"

export const Exp_B = () => {
    const result = content
    return <>
        <ReactMarkdown>
            {result}
        </ReactMarkdown>
    </>
}