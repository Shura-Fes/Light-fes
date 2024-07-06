import { FunctionComponent, ReactElement, useState } from "react"
import "./Hints.css"

type CollapseProps = {
    className?: string
    children: ReactElement<CollapseProps> | ReactElement<ItemProps>[]
    content: string
}

export const Collapse: FunctionComponent<CollapseProps> = ({ children, content, className = "" }) => {
    const [open, setOpen] = useState(false);

    const onClick = () => setOpen((prev) => !prev)

    return <>
        <button className={`${className} collapse-button`} onClick={onClick}>{content}</button>
        <div className={`collapse ${open ? "open" : "close"}`}>{children}</div>
    </>
}

type ItemProps = {
    children: string
}

export const Item: FunctionComponent<ItemProps> = ({ children }) => {
    return <div className={"item"}><p>
        {children}
    </p>
    </div>
}