import React, { useState, useEffect } from "react";
import button from "../img/button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface ImageGalleryProps {
  images: any[];
  viewImages: any[];
}

function ImageGallery(props: ImageGalleryProps) {
  const { images, viewImages } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 5초마다 이미지 자동 변경
  useEffect(() => {
    if (isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length, isModalOpen]);

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(0);
  };

  return (
    <div className="w-full">
      {/* 이미지 갤러리 */}
      <div className="grid grid-cols-2 gap-4">
        {viewImages.map((img, index) => (
          <div
            key={index}
            className="relative w-[180px] h-[180px] overflow-hidden mx-auto"
          >
            <img
              src={img}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* 더보기 버튼 */}
      <div className="text-center mt-8">
        <a
          href="#more"
          onClick={(e) => {
            e.preventDefault(); // 기본 동작 방지
            setModalOpen(true);
          }}
          className="inline-block"
        >
          <img
            src={button}
            alt="더보기 버튼"
            className="w-16 h-16 object-contain"
          />
        </a>
      </div>

      {/* 팝업 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="relative mt-[30px] mb-[30px] bg-white w-[446px] h-[664px] z-[100]">
            <button className="absolute left-[25px] top-[25px]">
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="xl"
                color="#FFF"
                onClick={closeModal}
              />
            </button>
            {/* 큰 이미지 */}
            <div className="p-4">
              <img
                src={images[currentImageIndex]}
                alt={`Large gallery item ${currentImageIndex + 1}`}
                className="w-[416px] h-[538px] rounded"
              />
            </div>

            {/* 이미지 리스트 */}
            <div className="flex gap-2 px-4 py-1 z-[100]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`cursor-pointer w-16 h-16 rounded ${
                    index === currentImageIndex
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            {/* 닫기 버튼 */}
            {/* <div className="text-center p-4 z-[100]">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={closeModal}
              >
                닫기
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
