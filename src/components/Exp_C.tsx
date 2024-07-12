import content from '../assets/markdowns/exp_c.md?raw';
import { Credits_C } from './Credits_C';
import { Markdown } from './Markdown';

export const Exp_C = () => {
    return (
        <>
            <Markdown content={content} />
            <Credits_C />
        </>
    );
};
