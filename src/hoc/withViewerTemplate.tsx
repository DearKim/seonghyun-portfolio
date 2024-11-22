import React, { useEffect, useRef, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Status from "../component/Status";
import Footer from "../component/Footer";

const withViewerTemplate =
  (WrappedComponent: React.FC<any>) => (props: any) => {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null); // 메뉴 요소 참조를 위한 ref
    const menuButtonRef = useRef<HTMLDivElement | null>(null); // 메뉴 버튼 참조

    // 메뉴 외부 클릭 감지 및 스크롤 시 메뉴 닫기
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // 메뉴 버튼이나 메뉴 외부 클릭 여부를 확인
        if (
          menuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target as Node)
        ) {
          setMenuOpen(false); // 메뉴 닫기
        }
      };

      // 메뉴가 열려 있는 상태에서 스크롤하면 메뉴 닫기
      const handleScroll = () => {
        if (menuOpen) {
          setMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll); // 전체 window의 스크롤 이벤트 감지

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("scroll", handleScroll); // 이벤트 제거
      };
    }, [menuOpen]);

    // wrapperRef 내부의 스크롤 감지 (기존 스크롤 이벤트)
    useEffect(() => {
      const currentRef = wrapperRef.current;
      if (currentRef) {
        const handleWrapperScroll = () => {
          setIsScrolling(true);

          setTimeout(() => {
            setIsScrolling(false);
          }, 100);

          // 메뉴가 열려 있는 상태에서 스크롤하면 메뉴 닫기
          if (menuOpen) {
            setMenuOpen(false);
          }
        };

        currentRef.addEventListener("scroll", handleWrapperScroll); // wrapperRef의 스크롤 이벤트 추가
        return () => {
          currentRef.removeEventListener("scroll", handleWrapperScroll); // 이벤트 제거
        };
      }
    }, [wrapperRef, menuOpen]);

    return (
      <div
        className="flex flex-row"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <div
          className="w-full h-full flex flex-col flex-1"
          ref={wrapperRef}
          style={{
            overflow: "auto",
            paddingTop: "82px",
            paddingBottom: "56px",
          }} // 패딩 추가
        >
          <div className="w-full flex py-2 px-4">
            <Status />
          </div>
          <div className="px-4 mb-[60px]">
            <WrappedComponent {...props} isScrolling={isScrolling} />
          </div>
        </div>

        {/* Header를 상단에 고정 */}
        <div className="w-full h-[82px] flex p-4 fixed top-0 left-0 right-0 bg-white z-50">
          <Header headerText="KIM SEONG HYUN - HOMPAGE" />
        </div>

        {/* Footer를 하단에 고정 */}
        <div
          ref={menuButtonRef}
          className="w-full h-[56px] flex flex-col px-4 fixed bottom-0 left-0 right-0 bg-white z-50"
        >
          <div className="flex items-center justify-center w-full">
            <div
              className="flex items-center justify-center w-[270px] relative"
              ref={menuRef}
            >
              {/* Menu 컴포넌트를 menuRef로 감싸서 외부 클릭 감지 */}
              <Menu open={menuOpen} />
            </div>
          </div>
          <Footer
            menuOnClick={() => {
              setMenuOpen((o) => !o);
            }}
          />
        </div>
      </div>
    );
  };

export default withViewerTemplate;
