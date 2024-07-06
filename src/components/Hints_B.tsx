import { Collapse, Item } from "./Hints"

export const Hints_B = () => {
    return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Collapse className={"top"} content={"答えが『きもの』の問題"}>
            <Item >☆の読み方は「せい」だ</Item>
            <Collapse content={"もっとヒントを見る"}>
                <Item>この並びは惑星を表しているようだ</Item>
                <Collapse content={"答えを見る"}>
                    <Item >必要なものは「水」だ</Item>
                </Collapse>
            </Collapse>
        </Collapse>
        <Collapse className={"top"} content="答えが『馬』の問題">
            <Item >イラストを英語で考えてみよう</Item>
            <Collapse content="もっとヒントを見る">
                <Item >イラストはそれぞれ「rocket」「ice」「hat」「now」「win」「star」を表している(「水」のイラストは差し変わるため、無視しよう)</Item>
                <Collapse content="最後のヒントを見る">
                    <Item>スケルトンパズルに入れる言葉は「rice」「chat」「know」「wine」「start」と「o」で始まる単語だ</Item>
                    <Collapse content="答えを見る">
                        <Item>必要なものは「ペン」だ</Item>
                    </Collapse>
                </Collapse>
            </Collapse>
        </Collapse>
        <Collapse className="top" content="答えが『邸宅』になる問題">
            <Item>アルファベットを当てはめてみよう</Item>
            <Collapse content="もっとヒントを見る">
                <Item>△と▽には上下さかさまのアルファベットが入るようだ</Item>
                <Collapse content="もっともっとヒントを見る">
                    <Item>〇にはOが入るようだ</Item>
                    <Collapse content="次のヒントを見る">
                        <Item>左の枠に入るのは「WINDOW」だ</Item>
                        <Collapse content="最後のヒントを見る">
                            <Item>スタッフのLINEのプロフィール画面を見てみよう</Item>
                            <Collapse content="答えを見る">
                                <Item>必要なものは「東京タワー」だ</Item>
                            </Collapse>
                        </Collapse>
                    </Collapse>
                </Collapse>
            </Collapse>
        </Collapse>
        <Collapse className="top" content="これ以降のヒントを見る">
            <Collapse className="top" content="東京タワーが手に入らない">
                <Item>契約書をよく見ると、署名が必要なようだ</Item>
                <Collapse content="もっとヒントを見る">
                    <Item>署名にはペンが必要だが、どうしたら手に入るだろうか</Item>
                    <Collapse content="最後のヒントを見る">
                        <Item>ゴミ集めの人がペンとプラスチックを交換してくれたが、手元にプラスチックはないだろうか</Item>
                        <Collapse content="答えを見る">
                            <Item>ゴミ集めの人にクリアファイルを渡して、ペンと交換しよう</Item>
                        </Collapse>
                    </Collapse>
                </Collapse>
            </Collapse>
            <Collapse className="top" content="東京タワーが手に入った後のヒントを見る">
                <Collapse className="top" content="藁を手に入れたい">
                    <Item>藁を交換してくれる人は見つからないみたいだ</Item>
                    <Collapse content="もっとヒントを見る">
                        <Item>これまで藁を交換した場面には心当たりはないだろうか</Item>
                        <Collapse content="もっともっとヒントを見る">
                            <Item>あなたはチュートリアルで「藁」と「紙飛行機」を交換したはずだが、誰と交換したのだろうか</Item>
                            <Collapse content="次のヒントを見る">
                                <Item>次の参加者の「藁」と「紙飛行機」を交換すればよさそうだが、「紙飛行機」はどこだろうか</Item>
                                <Collapse content="最後のヒントを見る">
                                    <Item>「権利書」で「紙飛行機」を作ろう</Item>
                                </Collapse>
                            </Collapse>
                        </Collapse>
                    </Collapse>
                </Collapse>
                <Collapse className="top" content="目的の場所にたどり着けない">
                    <Item>ブース内に入るにはスタッフである必要があるようだ</Item>
                    <Collapse content="もっとヒントを見る">
                        <Item>スタッフになるには「スタッフ」と書かれた紙が入ったパスケースを身に着ける必要があるようだ</Item>
                        <Collapse content="もっともっとヒントを見る">
                            <Item>交換では手に入らないので、どうにかして作る必要がありそうだ</Item>
                            <Collapse content="最後のヒントを見る">
                                <Item>権利書の下のほうを見よう</Item>
                                <Collapse content="答えを見る">
                                    <Item>権利書の下のほうの「スタッフ」の部分を破り、参加者パスに入れてスタッフ証を偽造し、ブース内に入ろう</Item>
                                </Collapse>
                            </Collapse>
                        </Collapse>
                    </Collapse>
                </Collapse>
            </Collapse>
        </Collapse>
    </div>
}