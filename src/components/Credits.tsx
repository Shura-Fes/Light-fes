import './Credits.css';

type Props = {
    title: string;
    scriptings: string[];
    riddlers: string[];
    manifactures: string[];
    bgms: string[];
    lines: string[];
    system: string[];
    kits: string[];
    keyvisual: string[];
    castDirection: string[];
    sites: string[];
    contentsDirection: string[];
    mainDirection: string[];
    team: string;
};
export const Credits = ({
    title,
    scriptings,
    riddlers,
    manifactures,
    bgms,
    lines,
    system,
    keyvisual,
    kits,
    castDirection,
    sites,
    contentsDirection,
    mainDirection,
    team,
}: Props) => {
    return (
        <details>
            <summary>{`『${title}』 クレジット`}</summary>
            {makeParagraph('脚本', scriptings)}
            {makeParagraph('謎制作・解説執筆', riddlers)}
            {makeParagraph('物品制作', manifactures)}
            {makeParagraph('BGM制作', bgms)}
            {makeParagraph('LINE制作', lines)}
            {makeParagraph('システム構築・デザイン', system)}
            {makeParagraph('キットデザイン', kits)}
            {makeParagraph('キービジュアルデザイン', keyvisual)}
            {makeParagraph('キャスト・スタッフ統括', castDirection)}
            {makeParagraph('解説サイト構築', sites)}
            {makeParagraph('コンテンツ制作指揮', contentsDirection)}
            {makeParagraph('総指揮', mainDirection)}
            {<p>監修 : {team}</p>}
        </details>
    );
};

const makeParagraph = (title: string, list: string[]) => {
    const members = makeList(list);
    return members && <p>{`${title} : ${members}`}</p>;
};

const makeList = (list: string[]) => list.join(' / ');
