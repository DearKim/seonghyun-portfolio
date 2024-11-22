import React from "react";
import main from "../../img/main.png";
import ImageGallery from "../ImageGallery";
import view1 from "../../img/view1.png";
import view2 from "../../img/view2.png";
import view3 from "../../img/view3.png";
import view4 from "../../img/view4.png";
import mview1 from "../../img/mview1.png";
import mview2 from "../../img/mview2.png";
import mview3 from "../../img/mview3.png";
import mview4 from "../../img/mview4.png";
import mview5 from "../../img/mview5.png";
import mview6 from "../../img/mview6.png";

const images = [mview1, mview2, mview3, mview4, mview5, mview6];
const viewImages = [view1, view2, view3, view4];

function TailWindCssPage() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F7F2EE] px-[19px] pb-[20px]">
      {/* 제목 */}
      <div className="min-h-[92px] flex justify-center items-center">
        <span className="text-xl font-bold border-y-2 py-2">
          윤슬 아가 사진 모음집
        </span>
      </div>
      <div>
        <img
          src={main}
          alt={"메인 이미지"}
          style={
            {
              // width: "40px",
              // height: "40px",
              // marginRight: "8px",
            }
          }
        />
      </div>

      <div className="min-h-[92px] flex justify-center items-center bg-white">
        <span className="text-xl font-bold">VIEW YOON SEUL</span>
      </div>

      <div className="mt-4 pt-4 bg-white">
        <ImageGallery images={images} viewImages={viewImages} />
      </div>

      <div className="w-full bg-white text-[#CEB5A2] text-[28px] flex items-center justify-center font-bold">
        2024<span className="text-[14px] mx-2"> / </span>4
        <span className="text-[14px] mx-2"> / </span>29
      </div>
      <div className="w-full bg-white text-[#666666] text-[28px] flex items-center justify-center font-bold pt-2">
        <div className="w-full bg-white text-[17px] flex itmes-center justify-center">
          MON. PM 02:21
        </div>
      </div>
      <div className=" bg-white p-6 rounded-md shadow-md">
        <div className="">
          <table className="table-auto w-full text-center border-collapse">
            <thead>
              <tr className="border-y-[2px]">
                <th className="py-2">일</th>
                <th className="py-2">월</th>
                <th className="py-2">화</th>
                <th className="py-2">수</th>
                <th className="py-2">목</th>
                <th className="py-2">금</th>
                <th className="py-2">토</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">&nbsp;</td>
                <td className="py-2">1</td>
                <td className="py-2">2</td>
                <td className="py-2">3</td>
                <td className="py-2">4</td>
                <td className="py-2">5</td>
                <td className="py-2">6</td>
              </tr>
              <tr>
                <td className="py-2">7</td>
                <td className="py-2">8</td>
                <td className="py-2">9</td>
                <td className="py-2">10</td>
                <td className="py-2">11</td>
                <td className="py-2">12</td>
                <td className="py-2">13</td>
              </tr>
              <tr>
                <td className="py-2">14</td>
                <td className="py-2">15</td>
                <td className="py-2">16</td>
                <td className="py-2">17</td>
                <td className="py-2">18</td>
                <td className="py-2">19</td>
                <td className="py-2">20</td>
              </tr>
              <tr>
                <td className="py-2">21</td>
                <td className="py-2">22</td>
                <td className="py-2">23</td>
                <td className="py-2">24</td>
                <td className="py-2">25</td>
                <td className="py-2">26</td>
                <td className="py-2">27</td>
              </tr>
              <tr>
                <td className="py-2">28</td>
                <td className="py-2 bg-[#cfa4a4] text-white font-bold rounded-[20px]">
                  29
                </td>
                <td className="py-2">30</td>
                <td className="py-2">31</td>
                <td className="py-2">&nbsp;</td>
                <td className="py-2">&nbsp;</td>
                <td className="py-2">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TailWindCssPage;
