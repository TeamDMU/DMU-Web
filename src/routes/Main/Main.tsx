import * as S from './Main.style';
import { useEffect, useRef, useState } from 'react';
import { theme } from '@/styles/theme';
import mainLogo from '../../assets/img/mainLogo.png';
import noticeIcon from '../../assets/img/notice.png';
import appleIcon from '../../assets/icon/appleLogo.svg';
import googlePlayIcon from '../../assets/icon/googlePlayLogo.svg';
import decoFirst from '../../assets/img/decoFirst.png';
import decoSecond from '../../assets/img/decoSecond.png';
import decoThird from '../../assets/img/decoThird.png';

function Main() {
	const [isScrolled, setIsScrolled] = useState(false);

	const textRef = useRef<HTMLParagraphElement>(null);
	const [textWidth, setTextWidth] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY || document.documentElement.scrollTop;
			setIsScrolled(scrollPosition > 10);
		};

		// 초기 스크롤 상태 확인
		handleScroll();

		// 이벤트 리스너 등록
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (textRef.current) {
			const width = textRef.current.offsetWidth;
			setTextWidth(width);
		}
	}, []);

	return (
		<S.NotificationContainer>
			<S.Decoration src={decoFirst} order={1} />
			<S.Decoration src={decoSecond} order={2} />
			<S.Decoration src={decoThird} order={3} />

			<S.NotificationBox width={textWidth}>
				<S.NotificationCard order={'left'}>
					<S.NotificationIcon src={noticeIcon} alt="icon" />
					<S.NotificationText>[공모전] 키워드 알림이 도착했어요!</S.NotificationText>
				</S.NotificationCard>
				<S.NotificationCard order={'right'}>
					<S.NotificationIcon src={noticeIcon} alt="icon" />
					<S.NotificationText>[장학] 키워드 알림이 도착했어요!</S.NotificationText>
				</S.NotificationCard>
				<S.NotificationCard order={'center'}>
					<S.NotificationIcon src={noticeIcon} alt="icon" />
					<S.NotificationText>&nbsp;</S.NotificationText>
				</S.NotificationCard>
			</S.NotificationBox>

			<S.MainText ref={textRef}>
				우리 학교 공지를 가장 빠르게<span style={{ color: theme.COLOR.Yellow }}>.</span>
			</S.MainText>
			<S.MainLogo src={mainLogo} width={textWidth} />

			<S.ButtonContainer>
				<S.DownloadButton>
					<S.DownloadLogo src={appleIcon} alt="App Store" />
					App Store
				</S.DownloadButton>
				<S.DownloadButton>
					<S.DownloadLogo src={googlePlayIcon} alt="Google Play" />
					Google Play
				</S.DownloadButton>
			</S.ButtonContainer>
		</S.NotificationContainer>
	);
}

export default Main;
