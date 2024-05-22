import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  console.log("----------------");
  console.log("홈 컴포넌트 실행");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("componentDidMount 또는 componentDidUpdate 실행");
    return () => {
      console.log("홈 클린업함수 실행");
    };
  }, [flag]);
  return (
    <div>
      {console.log("홈return 실행")}
      <h1>Home</h1>
      <button onClick={() => setFlag((prev) => !prev)}>flag 상태 토글링</button>
      <Link to="/detail/10">상세화면 이동</Link>
    </div>
  );
}
