import content from "../assets/markdowns/exp_a.md?raw"
import { Markdown } from "./Markdown"


export const Exp_A = () => {
    return <Markdown content={content} />
}