import keyVisualColor from '../assets/keyvisual/syurasai_color.avif?url';
import { Link } from 'react-router-dom';

import './Main_KV.css';
import { Credits_A } from './Credits_A';
import { Credits_B } from './Credits_B';

import ContentCImage from '../assets/keyvisual/syurasai_contents_c.avif?url';
import { XButton } from './X';
import { Contents, HashTags, KansoTemplate } from '../Consts';
import { Credits_C } from './Credits_C';

export const Main_KV = () => {
  const keyVisual = getKV();
  return (
    <div style={{ marginBottom: '10px' }}>
      <img src={keyVisual} />
      <div>解説サイトはこちら！</div>
      <div>
        <Link to={'ExpA_aiya1iZe'}>参加者サイド</Link>
        {'／'}
        <Link to={'ExpB_Gaiph9Ol'}>制作者サイド</Link>
      </div>
      <div>
        <Credits_A />
      </div>
      <div>
        <Credits_B />
      </div>
      <div>
        <XButton title={Contents.A} hashtags={[HashTags.A, HashTags.S, HashTags.L]} message={KansoTemplate} />
        <XButton title={Contents.B} hashtags={[HashTags.B, HashTags.S, HashTags.L]} message={KansoTemplate} />
      </div>
      <div>
        <div style={{ color: 'red', marginBottom: '5px' }}>
          ２つのサイドをクリアすると『回らない当日運営からの脱出』に参加可能でした！
        </div>
        <img src={ContentCImage} />
        <Link to={'Exp3_ouBa4eng'}>
          <div>修羅祭実行委員会サイドの解説はこちら！</div>
        </Link>
      </div>
      <div>
        <Credits_C />
      </div>
    </div>
  );
};

const getKV = () => {
  return keyVisualColor;
};
