import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  >header{
    background-color: ${({ theme }) => theme.COLORS.PINK}0d;

    height: 144px;
    display: flex;
    align-items: center;
    padding-inline: 144px;

  }

`



export const Form = styled.form`
  width: 340px;
  margin: -94px auto 0 ;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 8px;

  >div:nth-child(2){
    margin-top: calc(64px - 8px);
  }
  >div:nth-child(4){
    margin-top: calc(24px - 8px);
  }
  >button{
    margin-top: calc(24px - 8px);
  }
 




`;

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: 0 auto ;

  >img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
  }


    label{
      position: absolute;
      bottom: 4px;
      right: 10px;

      width: 48px;
      height: 48px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      display: block;
      border-radius: 50%;
      cursor: pointer;

      input{
        display: none;
      }
      svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${({ theme }) => theme.COLORS.GRAY_700};
        font-size: 20px;
      }
    }
  



`;