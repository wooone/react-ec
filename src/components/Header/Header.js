import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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

import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [profileAction, setProfileAction] = useState(false);

  const handleClick = () => {
    if (profileAction === true) {
      setProfileAction(false);
    } else {
      setProfileAction(true);
    }
  };

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

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("成功登出");
        setProfileAction(false);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__header");

  const navigateToCart = () => {
    navigate("/cart");
  };

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
                      {totalQuantity}
                    </span>
                  </SpanIconStyled>

                  <div className="relative z-10">
                    <UserIconImage
                      whileTap={{ scale: 1.2 }}
                      src={currentUser ? currentUser.photoURL : userIcon}
                      alt="userIcon"
                      onClick={handleClick}
                    />
                    {profileAction ? (
                      <div className="absolute top-[150%] left-[-10%] w-[100px] z-20 py-[8px] pl-3 items-center flex-col bg-card_bg_01 leading-8 cursor-pointer">
                        {currentUser ? (
                          <span onClick={logout}>Logout</span>
                        ) : (
                          <div className="d-flex flex-col">
                            <Link to="/signup">Signup</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/dashboard">Dashboard</Link>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
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

                  <SpanIconStyled onClick={navigateToCart}>
                    <IconsStyled className="ri-shopping-bag-line"></IconsStyled>
                    <span className="absolute top-[50%] right-[-70%] content-[''] bg-primary_color text-white rounded-full text-xs font-semibold px-1.5">
                      {totalQuantity}
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
