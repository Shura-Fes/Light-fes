import XIcon from '@mui/icons-material/X';

import './X.css';

type Props = {
  message: string;
  title: string;
  hashtags: string[];
};

export const XButton = ({ message, title, hashtags }: Props) => {
  const encoded = encodeURIComponent(`${message}${hashtags.map((hashtag) => `#${hashtag}`).join('\n')}`);
  const twitterUrl = `https://twitter.com/share?text=${encoded}`;

  return (
    <div className={'xbutton'}>
      <a className={'button'} href={twitterUrl}>
        <XIcon className={'xicon'} />
        {`『${title}』の感想ポストはこちらから！`}
      </a>
    </div>
  );
};
