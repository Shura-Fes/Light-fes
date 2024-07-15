import keyVisualGray from '../assets/keyvisual/syurasai_gray.avif?url';
import keyVisualSankasha from '../assets/keyvisual/syurasai_sankasha.avif?url';
import keyVisualWara from '../assets/keyvisual/syurasai_wara.avif?url';
import keyVisualColor from '../assets/keyvisual/syurasai_color.avif?url';
import { Link } from 'react-router-dom';

import a_banner from '../assets/banners/a_exp_banner.avif?url';
import b_banner from '../assets/banners/b_exp_banner.avif?url';

import './Main_KV.css';
import { Credits_A } from './Credits_A';
import { Credits_B } from './Credits_B';

import ContentCImage from '../assets/keyvisual/syurasai_contents_c.avif?url';
import { XButton } from './X';
import { Contents, HashTags, KansoTemplate } from '../Consts';

type Props = {
  clearingA: boolean;
  clearingB: boolean;
};

const bannerStyles = {
  width: '250px',
};

export const Main_KV = ({ clearingA, clearingB }: Props) => {
  const keyVisual = getKV(clearingA, clearingB);
  return (
    <div style={{ marginBottom: '10px' }}>
      <img src={keyVisual} />
      <div>
        {
        clearingA && <Link to={clearingA ? 'ExpA_aiya1iZe' : ''} className={clearingA ? '' : 'disable-link'}>
          参加者サイド解説
        </Link>
        }
        {clearingA && clearingB && '／' }
        {
        clearingB && <Link to={clearingB ? 'ExpB_Gaiph9Ol' : ''} className={clearingB ? '' : 'disable-link'}>
          制作者サイド解説
        </Link>
        }
      </div>
      <div>{clearingA && <Credits_A />}</div>
      <div>{clearingB && <Credits_B />}</div>
      <div>
        {clearingA && (
          <XButton title={Contents.A} hashtags={[HashTags.A, HashTags.S, HashTags.L]} message={KansoTemplate} />
        )}
        {clearingB && (
          <XButton title={Contents.B} hashtags={[HashTags.B, HashTags.S, HashTags.L]} message={KansoTemplate} />
        )}
      </div>
      <div>
        {clearingA && clearingB && (
          <>
            <div style={{ color: 'red', marginBottom: '5px' }}>
              ２つのサイドをクリアしたので『回らない当日運営からの脱出』に参加可能です！
            </div>
            <img src={ContentCImage} />
            <div>
              参加するには、『回らない当日運営からの脱出』を予約して、呼ばれたらこの画面をブースで見せてください！
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const getKV = (clearingA: boolean, clearingB: boolean) => {
  if (clearingA && clearingB) return keyVisualColor;
  if (clearingA) return keyVisualSankasha;
  if (clearingB) return keyVisualWara;
  return keyVisualGray;
};
