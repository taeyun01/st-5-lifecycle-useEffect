import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  console.log("params:", params);
  useEffect(() => {
    console.log("Detail 컴포넌트 마운트 이후 실행");
  }, []);
  return <div>Detail</div>;
}
