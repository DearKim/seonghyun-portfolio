import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./index.css";

interface MenuProps {
  open: boolean;
}

const Menu = (props: MenuProps) => {
  const { open } = props;
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <CSSTransition
        in={open}
        timeout={300}
        classNames="menu-slide"
        unmountOnExit
      >
        <div
          className="menu-container flex flex-col h-full mt-[64px] fixed w-[200px] min-h-[380px] bg-white border border-bg-blue p-3 rounded"
          style={{ maxHeight: "calc(var(--vh, 1vh) * 40)" }}
        >
          {["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5"].map((item, index) => (
            <CSSTransition
              key={index}
              in={open}
              timeout={300 + index * 100} // 각 항목에 애니메이션 지연 시간 추가
              classNames="menu-item"
              unmountOnExit
            >
              <div className="flex items-center h-[40px]">
                <span className="font-bold">{item}</span>
              </div>
            </CSSTransition>
          ))}
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
