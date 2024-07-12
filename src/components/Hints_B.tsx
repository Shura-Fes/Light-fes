import content from "../assets/markdowns/hints_b.html?raw"
import { Markdown } from "./Markdown"
import "./Hints_B.css"

export const Hints_B = () => {
    return <Markdown content={content} />
}
