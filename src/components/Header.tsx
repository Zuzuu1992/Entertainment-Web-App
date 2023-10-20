import styled from "styled-components";
import Logo from "../assets/logo.svg";
import BookmarkIcon from "../svg/BookmarkIcon";
import HomeIcon from "../svg/HomeIcon";
import MoviesIcon from "../svg/MoviesIcon";
import TvSeriesIcon from "../svg/TvSeriesIcon";
import AvatarImg from "../assets/image-avatar.png";

function Header() {
  return (
    <HeaderWrapper>
      <LogoBox>
        <img src={Logo} alt="Logo" />
      </LogoBox>
      <NaviGationIconBox>
        <HomeIcon />
        <MoviesIcon />
        <TvSeriesIcon />
        <BookmarkIcon />
      </NaviGationIconBox>
      <AvatarBox>
        <img src={AvatarImg} alt="Avatar" />
      </AvatarBox>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  background: var(--secondary);
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NaviGationIconBox = styled.div`
  display: flex;
  column-gap: 20px;
`;

const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: 1px solid var(--pureWhite);
  img {
    width: 100%;
  }
`;
