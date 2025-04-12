import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const NotificationContainer = styled.section`
	background: linear-gradient(to bottom, #95a7ee 0%, #4967e2 31%, #354dae 100%);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	padding: 3rem;
`;

export const Decoration = styled.img<{ order: 1 | 2 | 3 }>`
	position: absolute;
	opacity: 0.2;
	z-index: 1;

	${({ order }) => {
		const widthMap = {
			1: '8rem',
			2: '9rem',
			3: '15rem',
		};

		const topMap = {
			1: '-2%',
			2: '26%',
			3: '54%',
		};

		const leftMap = {
			1: '25%',
			2: '66%',
			3: '24%',
		};

		const filterMap = {
			1: 'blur(5px)',
			2: 'blur(8px)',
			3: 'blur(8px)',
		};

		return `
      width: ${widthMap[order]};
      top: ${topMap[order]};
      left: ${leftMap[order]};
	  filter: ${filterMap[order]};
    `;
	}}
`;

export const NotificationBox = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-top: 3rem;
	margin-bottom: 5rem;
`;

export const NotificationCard = styled.div<{ reverse?: boolean }>`
	width: fit-content;
	min-width: 400px;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(4px);
	border-radius: 1rem;
	padding: 1rem;
	font-size: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-left: ${props => (props.reverse ? 'auto' : '0')};
`;

export const NotificationText = styled.text`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${theme.COLOR.White};
`;

export const NotificationIcon = styled.img`
	width: 2rem;
	height: 2rem;
`;

export const MainText = styled.p`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 2rem;
`;

export const MainLogo = styled.img<{ width?: number }>`
	width: ${({ width }) => (width ? `${width}px` : 'auto')};
	margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1.5rem;
`;

export const DownloadButton = styled.button`
	background-color: white;
	color: ${theme.COLOR.Blue400};
	padding: 0.8rem 1rem;
	border-radius: 1rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	font-weight: 600;
	border: 2px solid transparent;
	cursor: pointer;
	gap: 0.5rem;

	&:hover {
		color: white;
		background-color: ${theme.COLOR.Blue400};
		border: 2px solid white;
	}
`;

export const DownloadLogo = styled.img`
	width: 3rem;
	height: 3rem;
	${DownloadButton}:hover & {
		filter: brightness(0) invert(1);
	}
`;
