import ReactMarkdown from "react-markdown"
import content from "../assets/markdowns/exp_a.md?raw"

export const Exp_A = () => {
    return <>
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
    </>
}