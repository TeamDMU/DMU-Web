import * as S from './Main.style';
import { useEffect, useState } from 'react';
import noticeIcon from '../../assets/icon/notice.svg';
import appleIcon from '../../assets/icon/notice.svg';
import playIcon from '../../assets/icon/notice.svg';

function Main() {
	const [isScrolled, setIsScrolled] = useState(false);

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
	return (
		<S.NotificationContainer>
			<S.NotificationBox>
				<S.NotificationCard>
					<S.Icon src={noticeIcon} alt="icon" />
					<S.NotificationText>[공모전] 키워드 알림이 도착했어요!</S.NotificationText>
				</S.NotificationCard>
				<S.NotificationCard>
					<S.Icon src={noticeIcon} alt="icon" />
					<S.NotificationText>[장학] 키워드 알림이 도착했어요!</S.NotificationText>
				</S.NotificationCard>
				<S.NotificationCard>
					<S.Icon src={noticeIcon} alt="icon" />
					<S.NotificationText>&nbsp;</S.NotificationText>
				</S.NotificationCard>
			</S.NotificationBox>

			<S.MainText>우리 학교 공지를 가장 빠르게.</S.MainText>
			<S.Logo>DMFORU</S.Logo>

			<S.ButtonContainer>
				<S.DownloadButton>
					<img src={appleIcon} alt="App Store" width={18} style={{ marginRight: 6 }} />
					App Store
				</S.DownloadButton>
				<S.DownloadButton>
					<img src={playIcon} alt="Google Play" width={18} style={{ marginRight: 6 }} />
					Google Play
				</S.DownloadButton>
			</S.ButtonContainer>
		</S.NotificationContainer>
	);
}

export default Main;
