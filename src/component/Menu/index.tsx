import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group"; // 애니메이션 라이브러리
import "./index.css";

interface MenuProps {
  open: boolean;
}

const Menu = (props: MenuProps) => {
  const { open } = props;
  const nodeRef = useRef(null); // nodeRef 생성

  return (
    <>
      <CSSTransition
        in={open}
        timeout={300}
        classNames="menu-slide"
        unmountOnExit
        nodeRef={nodeRef} // nodeRef 사용
      >
        <div
          ref={nodeRef} // 해당 DOM 요소에 nodeRef 연결
          className="menu-container flex flex-col h-full absolute left-0 bottom-[12px] w-full max-w-[270px] min-h-[380px] bg-white border border-bg-blue p-3 rounded"
          style={{ maxHeight: "calc(var(--vh, 1vh) * 40)" }}
        >
          {["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5"].map((item, index) => (
            <div key={index} className="flex items-center h-[40px]">
              <span className="font-bold">{item}</span>
            </div>
          ))}
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
