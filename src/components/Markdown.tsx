import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"

type Props = {
    content: string
}

export const Markdown = ({ content }: Props) => {
    const imageReg = /\(@.*\)/g;
    const images = Array.from(content.matchAll(imageReg)).map(([key]) => key).map(target => target.substring(2, target.length - 1));

    const result = images.reduce((result, image) => {
        return result.replaceAll(`(@${image})`, `(${getImageUrl(image)})`)
    }, content)

    return <ReactMarkdown remarkPlugins={[remarkFrontmatter, remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight, rehypeRaw]}>
        {result}
    </ReactMarkdown>
}

const getImageUrl = (target: string) => {
    const targetFileType = ["avif", "webp", "jpeg", "jpg", "png"]

    for (const extention of targetFileType) {
        const url = new URL(`../assets/markdowns/images/${target}.${extention}`, import.meta.url).href
        if (url.includes(target)) {
            return url
        }
    }
}
