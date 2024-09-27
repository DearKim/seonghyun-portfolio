import React, { useEffect, useRef, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Status from "../component/Status";

// type BreadFn = (items: RegExpMatchArray) => string | string[];

// const breadcrumbNameMap: {
//   [key: string]: string | BreadFn | undefined | JSX.Element;
// } = {};

const withViewerTemplate =
  (WrappedComponent: React.FC<any>) => (props: any) => {
    // const navigate = useNavigate();
    // const location = useLocation();

    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const currentRef = wrapperRef.current;
      if (currentRef) {
        const handleScroll = () => {
          setIsScrolling(true);

          setTimeout(() => {
            setIsScrolling(false);
          }, 100);
        };
        currentRef.addEventListener("scroll", handleScroll);
        return () => {
          currentRef.removeEventListener("scroll", handleScroll);
        };
      }
    }, [wrapperRef]);

    return (
      <div
        className="flex flex-row"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <div
          className="w-full h-full flex flex-col flex-1"
          ref={wrapperRef}
          style={{ overflow: "auto" }}
        >
          <div className="w-full h-[82px] flex p-4 relative">
            <Header
              menuOnClick={() => {
                setMenuOpen((o) => !o);
              }}
            />
            <Menu open={menuOpen} />
          </div>
          <div className="w-full flex py-2 px-4">
            <Status />
          </div>
          <div className="px-4">
            <WrappedComponent {...props} isScrolling={isScrolling} />
          </div>
        </div>
      </div>
    );
  };

export default withViewerTemplate;
