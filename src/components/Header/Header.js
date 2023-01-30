import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import { Container, Row } from "reactstrap";
import userIcon from "../../assets/images/user-icon.png";
import {
  HeaderStyled,
  IconsStyled,
  UserIconImage,
  SpanIconStyled,
  StickyHeader,
  Menu,
  NavigationStyled,
} from "./Header.style";

const navLinks = [
  {
    path: "home",
    display: "首頁",
  },
  {
    path: "shop",
    display: "商店",
  },
  {
    path: "cart",
    display: "購物車",
  },
];

const Header = () => {
  const [headerType, setHeaderType] = useState("HeaderStyled");

  const menuRef = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setHeaderType("StickyHeader");
    } else {
      setHeaderType("HeaderStyled");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__header");

  return (
    <>
      {headerType === "HeaderStyled" ? (
        <HeaderStyled>
          <Container>
            <Row>
              <div className="d-flex items-center justify-between">
                <div className="d-flex items-center gap-x-[8px]">
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src={logo}
                    alt="logo"
                  />
                  <div>
                    <h1 className="text-lg font-semibold text-primary_color">
                      雞皮購物
                    </h1>
                    <p className="text-xs">Since 1997</p>
                  </div>
                </div>

                <NavigationStyled ref={menuRef} onClick={menuToggle}>
                  <Menu>
                    {navLinks.map((item, index) => (
                      <li
                        className="flex justify-center items-center"
                        key={index}
                      >
                        <NavLink
                          to={item.path}
                          className={(navClass) =>
                            navClass.isActive
                              ? "font-semibold"
                              : "text-primary_color font-normal cursor-pointer"
                          }
                        >
                          {item.display}
                        </NavLink>
                      </li>
                    ))}
                  </Menu>
                </NavigationStyled>

                <div className="d-flex items-center gap-x-[1.7rem]">
                  <SpanIconStyled>
                    <IconsStyled className="ri-heart-line"></IconsStyled>
                    <span className="absolute top-[50%] right-[-45%] content-[''] bg-primary_color text-white rounded-full text-xs font-semibold px-1.5">
                      1
                    </span>
                  </SpanIconStyled>

                  <SpanIconStyled>
                    <IconsStyled className="ri-shopping-bag-line"></IconsStyled>
                    <span className="absolute top-[50%] right-[-70%] content-[''] bg-primary_color text-white rounded-full text-xs font-semibold px-1.5">
                      1
                    </span>
                  </SpanIconStyled>

                  <span>
                    <UserIconImage
                      whileTap={{ scale: 1.2 }}
                      src={userIcon}
                      alt="userIcon"
                    />
                  </span>
                </div>

                <div className="text-xl text-primary_color md:hidden">
                  <span onClick={menuToggle}>
                    <i className="ri-menu-line"></i>
                  </span>
                </div>
              </div>
            </Row>
          </Container>
        </HeaderStyled>
      ) : (
        <StickyHeader>
          <Container>
            <Row>
              <div className="d-flex items-center justify-between">
                <div className="d-flex items-center gap-x-[8px]">
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src={logo}
                    alt="logo"
                  />
                  <div>
                    <h1 className="text-lg font-semibold text-primary_color">
                      雞皮購物
                    </h1>
                    <p className="text-xs">Since 1997</p>
                  </div>
                </div>

                <NavigationStyled ref={menuRef} onClick={menuToggle}>
                  <Menu>
                    {navLinks.map((item, index) => (
                      <li
                        className="flex justify-center items-center"
                        key={index}
                      >
                        <NavLink
                          to={item.path}
                          className={(navClass) =>
                            navClass.isActive
                              ? "font-semibold"
                              : "text-primary_color font-normal cursor-pointer"
                          }
                        >
                          {item.display}
                        </NavLink>
                      </li>
                    ))}
                  </Menu>
                </NavigationStyled>

                <div className="d-flex items-center gap-x-[1.7rem]">
                  <SpanIconStyled>
                    <IconsStyled className="ri-heart-line"></IconsStyled>
                    <span className="absolute top-[50%] right-[-45%] content-[''] bg-primary_color text-white rounded-full text-xs font-semibold px-1.5">
                      1
                    </span>
                  </SpanIconStyled>

                  <SpanIconStyled>
                    <IconsStyled className="ri-shopping-bag-line"></IconsStyled>
                    <span className="absolute top-[50%] right-[-70%] content-[''] bg-primary_color text-white rounded-full text-xs font-semibold px-1.5">
                      1
                    </span>
                  </SpanIconStyled>

                  <span>
                    <UserIconImage
                      whileTap={{ scale: 1.2 }}
                      src={userIcon}
                      alt="userIcon"
                    />
                  </span>
                </div>

                <div className="text-xl text-primary_color md:hidden">
                  <span onClick={menuToggle}>
                    <i className="ri-menu-line"></i>
                  </span>
                </div>
              </div>
            </Row>
          </Container>
        </StickyHeader>
      )}
    </>
  );
};

export default Header;
