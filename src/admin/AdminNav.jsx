import { Container, Row } from "reactstrap";

import useAuth from "../custom-hooks/useAuth";
import { RightSpan } from "./Admin.style";

import { NavLink } from "react-router-dom";

const admin__nav = [
  {
    display: "Dashboard",
    path: "./dashboard",
  },
  {
    display: "All-products",
    path: "./dashboard/all-products",
  },
  {
    display: "Orders",
    path: "./dashboard/orders",
  },
  {
    display: "Users",
    path: "./dashboard/users",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="w-full bg-primary_color py-2">
        <div className="w-full">
          <Container>
            <div className="d-flex items-center justify-between gap-x-[6rem]">
              <div className="logo">
                <h2 className="text-xl whitespace-nowrap text-white font-medium">
                  雞皮購物
                </h2>
              </div>

              <div className="w-full d-flex items-center justify-between">
                <input
                  className="p-1 mr-1 pl-3 w-full"
                  type="text"
                  placeholder="Search..."
                />
                <span>
                  <i className="ri-search-line text-white"></i>
                </span>
              </div>

              <div className="flex items-center gap-x-8">
                <RightSpan>
                  <i className="ri-notification-3-line"></i>
                </RightSpan>
                <RightSpan>
                  <i className="ri-settings-2-line"></i>
                </RightSpan>
                <img
                  className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer"
                  src={currentUser && currentUser.photoURL}
                  alt=""
                />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="p-0 w-full height-[70px] leading-[70px] bg-card_bg_02">
        <Container>
          <Row>
            <div className="text-center">
              <ul className="d-flex items-center gap-x-[2.7rem] justify-center">
                {admin__nav.map((item, index) => (
                  <li className="text-primary_color font-medium " key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive
                          ? "px-[15px] py-[10px] rounded-md bg-gray-100"
                          : "px-[15px] py-[10px] rounded-md"
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
