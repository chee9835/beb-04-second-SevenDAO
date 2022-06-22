import { css } from '@emotion/react';
import { FunctionComponent } from 'react';
import { BiHomeSmile, BiSearchAlt2, BiDetail, BiMinus, BiEditAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';

interface HeadProps {}

const HeadMenuButton: FunctionComponent<HeadProps> = () => {
  const router = useRouter();

  const buttonWrapperStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50px;
    height: 300px;
  `;
  const buttonStyle = css`
    width: 30px;
    height: 30px;
    margin-bottom: 3px;
    color: #a0a0a0ff;
    cursor: pointer;
    :hover {
      color: #777777ff;
    }
  `;
  const dashStyle = css`
    width: 20px;
    color: #a0a0a0ff;
    margin-left: 5px;
  `;

  return (
    <div css={buttonWrapperStyle}>
      <BiHomeSmile
        css={buttonStyle}
        onClick={() => {
          router.push('/');
        }}
      ></BiHomeSmile>
      <BiSearchAlt2
        css={buttonStyle}
        onClick={() => {
          router.push('/search');
        }}
      ></BiSearchAlt2>
      <BiDetail
        css={buttonStyle}
        onClick={() => {
          router.push('/mypage');
        }}
      ></BiDetail>
      <BiMinus css={dashStyle}></BiMinus>
      <BiEditAlt
        css={buttonStyle}
        onClick={() => {
          router.push('/edit');
        }}
      ></BiEditAlt>
    </div>
  );
};

export default HeadMenuButton;
