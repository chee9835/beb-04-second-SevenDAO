import { css } from '@emotion/react';
import { FunctionComponent, useEffect, useState } from 'react';

interface ContentsTextProps {
  contents: string;
  mode?: 'default' | 'detail';
}

const ContentsText: FunctionComponent<ContentsTextProps> = ({
  contents = 'JUN 23',
  mode = 'default',
}) => {
  const [contentsHTML, setContentsHTML] = useState<string>('');

  useEffect(() => {
    setContentsHTML(contents);
  }, [contents]);

  const wrapperStyle = css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 760px;
    padding: 1em;
  `;

  const constentsTextDetailStyle = css`
    font-size: 15px;
    line-height: 25px;

    /* 이미지 */
    img {
      max-width: 90%;
    }

    /* 링크 */
    a {
      color: #8080ff;
      text-decoration-line: underline;
    }
    a :hover {
      color: blue;
      transition-duration: 1s;
    }
  `;

  const contentsTextStyle = css`
    ${constentsTextDetailStyle}
    color: #292929ff;

    /* display:  flex; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: 50vw;

    font-size: 1em;
    font-weight: 500;

    > * {
      padding: 0 0.5em 0 0;
      margin: 0;
      font-size: 1em;
      font-weight: 500;
    }

    /* 이미지 제거 */
    img {
      display: none;
    }
    div {
      background-image: none;
    }
  `;

  return (
    <div css={wrapperStyle}>
      <div
        css={mode === 'detail' ? constentsTextDetailStyle : contentsTextStyle}
        dangerouslySetInnerHTML={{ __html: `${contentsHTML}` }}
      ></div>
    </div>
  );
};

export default ContentsText;
