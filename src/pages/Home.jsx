import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  console.log("홈 컴포넌트 실행");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("componentDidMount 또는 componentDidUpdate 실행");
    return () => {
      console.log("홈 unmount");
    };
  }, []);
  return (
    <div>
      {console.log("홈return 실행")}
      <h1>Home</h1>
      <Link to="/detail/10">상세화면 이동</Link>
    </div>
  );
}
