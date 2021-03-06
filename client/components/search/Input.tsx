import { css } from '@emotion/react';
import { FunctionComponent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FunctionComponent<InputProps> = ({ ...props }) => {
  const wrapperStyle = css`
    padding: 50px;
    width: '100%';
  `;
  const containerStyle = css`
    display: flex;
    align-items: center;
    background-color: #eeeeee;
    height: 45px;
    width: '100%';
    border-radius: 25px;
    cursor: text;
    padding: 15px;
    margin-right: 10px;
    min-width: 1000px;
  `;

  const inputStyle = css`
    background-color: #eeeeee;
    color: #292929ff;
    border: none;
    outline: none;
    padding-left: 10px;
    font-weight: 300;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  `;

  return (
    <div css={wrapperStyle}>
      <div css={containerStyle}>
        <AiOutlineSearch size={'25px'} color={'#707A83'} />
        <input css={inputStyle} placeholder="search" {...props}></input>
      </div>
    </div>
  );
};

export default Input;
