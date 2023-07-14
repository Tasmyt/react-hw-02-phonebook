import styled from 'styled-components';
export const Conteiner = styled.div`
  display: flex;
  margin: 20px;
  padding: 20px;
  justify-content: center;
  background: #e7f3e5;
  position: relative;
  border-bottom: 4px solid #a2822f;
`;
export const Description = styled.div`
  width: 400px;
  margin-right: 160px;
  border: 4px solid #a2822f;
  position: relative;
  padding: 20px;

  &:before {
    content: '';
    position: absolute;
    width: 64px;
    height: 46px;
    border-bottom: 4px solid #a2822f;
    left: -4px;
    top: -4px;
    background: #e7f3e5;
  }

  &:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 60px;
    border-top: 4px solid #a2822f;
    border-left: 4px solid #a2822f;
    left: 42px;
    top: -4px;
  }
`;

export const Avatar = styled.img`
  display: block;
  max-width: 240px;
  margin: auto;
`;
export const Name = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: #a2822f;
  text-shadow: 3px 2px 0px #efeded, 4px 4px 0px rgba(0, 0, 0, 0.15);
`;
export const Tag = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  color: #a2822f;
  letter-spacing: 2px;
  font-weight: 300;
  margin-bottom: 0;
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: #a2822f;
    margin: 12px auto 0 auto;
  }
`;
export const Location = styled.p`
  margin-top: 12px;
  text-align: center;
  font-size: 20px;
  text-shadow: 1px 1px 0 #a2822f;
`;
export const Stats = styled.ul`
  display: flex;
  margin: auto 0;
  list-style-type: none;
  gap: 120px;
`;
