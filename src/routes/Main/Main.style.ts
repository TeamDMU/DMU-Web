import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const NotificationContainer = styled.section`
  background: linear-gradient(to bottom, #95A7EE 0%, #4967E2 31%, #354DAE 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const NotificationCard = styled.div<{ reverse: boolean }>`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NotificationText = styled.text`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${theme.COLOR.White};
`

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;

`;

export const MainText = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const Logo = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const DownloadButton = styled.button`
  background-color: white;
  color: #3a60b2;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
