import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";

export default function MomentExample() {
  const [day, setDay] = useState("");
  const birthDayRef = useRef(null);

  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneMomentDate = newMomentDate.clone().add(1, "week");
  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneMomentDate.format()}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>2018년 3월 10일 13시에 하루 더하기 :</div>
      {moment
        .tz("2018-03-10 13:00:00", "America/New_York")
        .add(1, "day")
        .format()}
      <div>2018년 3월 10일 13시에 24시간 더하기 :</div>
      {moment
        .tz("2018-03-10 13:00:00", "America/New_York")
        .add(24, "hour")
        .format()}
      <br />
      <br />
      <div>Leap year(윤년)</div>
      <div>2017년 1월 1일에 1년 빼기 :</div>
      {moment("2017-01-01").subtract(1, "year").format()}
      <div>2017년 1월 1일에 365일 빼기 :</div>
      {moment("2017-01-01").subtract(365, "day").format()}
      <br />
      <br />
      <div>한국어로 표기</div>
      <div>07-17-2021를 2021년 7월 17일로 표기</div>
      {moment("07-17-2017").format("YYYY년 M월 D일")}
      <br />
      <br />
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을끼?</div>
        <div>{day}</div>
      </div>
      <br />
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        $
        {`${moment("2021-07-17 03:00").diff(
          moment("2021-07-18 02:00"),
          "hours"
        )}시간`}
      </div>
    </div>
  );
}
