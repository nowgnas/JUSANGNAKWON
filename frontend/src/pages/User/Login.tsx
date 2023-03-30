import { Outlet } from "react-router-dom";
import styles from "@/pages/User/Login.module.css";
import kakao from "/assets/kakaosocial.png";
import google from "/assets/googlesocial.png";
import socialLogin from "@/utils/socialLogin";
import NeonTitle from "@/components/Commons/NeonTitle/NeonTitle";

const Login = () => {
  return (
    <div className={`${styles["container"]}`}>
      <div style={{ scale: "2.2", marginBottom:"70px" }}>
        <NeonTitle></NeonTitle>
      </div>
      {/* <hr className={`${styles["line"]}`} /> */}
      <p className={`${styles["introduce-text"]}`}>
        와인부터 칵테일 전통주,
        <br />
        그리고 홈텐더들을 위한 레시피까지,
        <br />
        세상의 모든 술 어쩌구
      </p>
      <p className={`${styles["nineteen-text"]}`}>19세 이상 이용 가능한 서비스입니다.</p>
      <div
        className={`${styles["google"]}`}
        onClick={() => {
          socialLogin({ provider_id: "google" });
        }}
      >
        <img src={google} />
        <span>Google 계정으로 로그인</span>
      </div>
      <div
        className={`${styles["kakao"]}`}
        onClick={() => {
          socialLogin({ provider_id: "kakao" });
        }}
      >
        <img src={kakao} />
        <span>카카오 로그인</span>
      </div>
    </div>
  );
};

export default Login;
