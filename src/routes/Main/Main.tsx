import * as S from './Main.style';
import { useEffect, useRef, useState } from 'react';
import { APP_STORE_LINK, GOOGLE_PLAY_LINK, PRIVACY_LINK, INQUIRY_LINK, INSTA_LINK, GITHUB_LINK } from '../../constants/links';
import mainLogo from '../../assets/img/mainLogo.png';
import noticeIcon from '../../assets/img/bubbleIcon.png';
import appleIcon from '../../assets/icon/appleLogo.svg';
import googlePlayIcon from '../../assets/icon/googlePlayLogo.svg';
import decoFirst from '../../assets/img/decoFirst.png';
import decoSecond from '../../assets/img/decoSecond.png';
import decoThird from '../../assets/img/decoThird.png';
import notice from '../../assets/img/notice.png';
import keyword from '../../assets/img/keyword.png';
import schedule from '../../assets/img/schedule.png';
import menu from '../../assets/img/menu.png';
import dmuLogo from '../../assets/icon/dmuRowLogo.svg';
import githubLogo from '../../assets/icon/githubLogo.svg'
import instaLogo from '../../assets/icon/instaLogo.svg'

function Main() {

	const textRef = useRef<HTMLParagraphElement>(null);
	const [textWidth, setTextWidth] = useState<number>(0);


	// 헤더용 사용 예정
	// const [isScrolled, setIsScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollPosition = window.scrollY || document.documentElement.scrollTop;
	// 		setIsScrolled(scrollPosition > 10);
	// 	};

	// 	// 초기 스크롤 상태 확인
	// 	handleScroll();

	// 	// 이벤트 리스너 등록
	// 	window.addEventListener('scroll', handleScroll, { passive: true });

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	useEffect(() => {
		if (textRef.current) {
			const width = textRef.current.offsetWidth;
			setTextWidth(width);
		}
	}, []);

	return (
		<S.OuterContainer>
			{/* 메인 */}
			<S.MainContainer>
				<S.MainDecoration src={decoFirst} order={1} />
				<S.MainDecoration src={decoSecond} order={2} />
				<S.MainDecoration src={decoThird} order={3} />

				<S.BubbleContainer width={textWidth}>
					<S.Bubble order={'left'}>
						<S.BubbleIcon src={noticeIcon} alt="icon" />
						<S.BubbleText>[공모전] 키워드 알림이 도착했어요!</S.BubbleText>
					</S.Bubble>
					<S.Bubble order={'right'}>
						<S.BubbleIcon src={noticeIcon} alt="icon" />
						<S.BubbleText>[장학] 키워드 알림이 도착했어요!</S.BubbleText>
					</S.Bubble>
					<S.Bubble order={'center'}>
						<S.BubbleIcon src={noticeIcon} alt="icon" />
						<S.BubbleText>&nbsp;</S.BubbleText>
					</S.Bubble>
				</S.BubbleContainer>

				<S.MainText ref={textRef}>
					우리 학교 공지를 가장 빠르게<S.TextSpan>.</S.TextSpan>
				</S.MainText>
				<S.MainLogo src={mainLogo} width={textWidth} />

				<S.DownloadContainer>
					<S.DownloadButton href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer">
						<S.DownloadLogo src={appleIcon} alt="App Store" />
						App Store
					</S.DownloadButton>

					<S.DownloadButton href={GOOGLE_PLAY_LINK} target="_blank" rel="noopener noreferrer">
						<S.DownloadLogo src={googlePlayIcon} alt="Google Play" />
						Google Play
					</S.DownloadButton>
				</S.DownloadContainer>
			</S.MainContainer>

			{/* 공지 */}
			<S.Section>
				<S.SectionCategory textColor={'Blue400'}>공지</S.SectionCategory>
				<S.SectionTitle>대학 공지와 학과 공지를<br/>한 곳에서 확인하고 싶다면?</S.SectionTitle>
				<S.SectionSubtitle>소속된 학과를 입력해보세요<br/>우리 학교 모든 공지를 빠르게 확인해요</S.SectionSubtitle>
				<S.NoticeImgWrapper>
					<S.NoticeImg src={notice} alt="notice"/>
				</S.NoticeImgWrapper>
			</S.Section>

			{/* 슬로건 */}
			<S.SloganContainer>
				<S.SloganText>우리 학교 공지를 <S.TextSpan>가장 빠르게</S.TextSpan></S.SloganText>
				<S.SloganText>중요한 정보를 <S.TextSpan>놓치지 않게</S.TextSpan></S.SloganText>
			</S.SloganContainer>

			{/* 키워드 */}
			<S.Section>
				<S.SectionCategory textColor={'Blue300'}>키워드 알림</S.SectionCategory>
				<S.SectionTitle>실시간으로 올라오는 공지사항을<br/>알림으로 받고 싶다면?</S.SectionTitle>
				<S.SectionSubtitle>학교 홈페이지에 수시로 들어갈 필요 없이<br/>내가 등록한 키워드의 알림이 실시간으로 도착해요</S.SectionSubtitle>
				<S.SectionImg src={keyword} alt="keyword"/>
			</S.Section>

			{/* 식단 */}
			<S.Section colorBackground={true}>
				<S.SectionCategory textColor={'BlueLogo'}>학사일정</S.SectionCategory>
				<S.SectionTitle>학사일정을 빠르게.</S.SectionTitle>
				<S.SectionSubtitle>월별로 필터링된 학사일정 정보를 확인해요</S.SectionSubtitle>
				<S.SectionImg src={schedule} alt="schedule"/>
			</S.Section>

			{/* 식단 */}
			<S.Section style={{paddingBottom: '2rem'}}>
				<S.SectionCategory textColor={'BlueLogo'}>금주의 식단</S.SectionCategory>
				<S.SectionTitle>한식부터 일품 메뉴를 한 곳에서.</S.SectionTitle>
				<S.SectionSubtitle>매주 달라지는 한식 & 요일별로 달라지는 일품<br/>학교 식당 정보를 확인해요</S.SectionSubtitle>
				<S.SectionImg src={menu} alt="menu"/>
			</S.Section>

			{/* 푸터 */}
			<S.FooterContainer>
				<S.LinkContainer>
					<a href={INSTA_LINK} target="_blank" rel="noopener noreferrer">
  						<S.FooterLogo src={instaLogo} alt="Insta Logo" />
					</a>

					<a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
  						<S.FooterLogo src={githubLogo} alt="GitHub Logo" />
					</a>
				</S.LinkContainer>

				<S.InfoContainer>.
					<S.Logo src={dmuLogo} alt="DMforU Logo" />
					<S.LinkText href={PRIVACY_LINK} target="_blank" rel="noopener noreferrer">개인정보처리방침</S.LinkText>
					<S.LinkText href={INQUIRY_LINK} target="_blank" rel="noopener noreferrer">문의하기</S.LinkText>
				</S.InfoContainer>

				<S.BottomText>
					Team DMU | 문의: Teamdmforu@gmail.com <br/>©2024 DMforU, All Rights Reserved.
				</S.BottomText>
			</S.FooterContainer>
		</S.OuterContainer>
	);
}

export default Main;
