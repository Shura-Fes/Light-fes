import ReactMarkdown from "react-markdown"
import content from "../assets/markdowns/exp_c.md?raw"

export const Exp_C = () => {
    return <>
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
    </>
}