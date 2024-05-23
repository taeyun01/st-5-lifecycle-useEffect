import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  console.log("----------------");
  console.log("Detail 컴포넌트 실행");
  const params = useParams();
  console.log("params:", params);
  useEffect(() => {
    console.log("Detail 컴포넌트 마운트 이후 실행");
    return () => {
      console.log("Detail 클린업함수 실행");
    };
  }, []);
  return (
    <div>
      {console.log("return Detail 실행")}
      Detail
    </div>
  );
}
