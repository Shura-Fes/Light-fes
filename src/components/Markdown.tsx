import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"

type Props = {
    content: string
}

export const Markdown = ({ content }: Props) =>
    <ReactMarkdown remarkPlugins={[remarkFrontmatter, remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight, rehypeRaw]}>
        {content}
    </ReactMarkdown>
