import styles from "@/components/Home/Banner/HometenderBanner.module.css";
import cocktailimg from "/assets/stcocktail.png";
import { Link } from "react-router-dom";

interface ApiData {
  success?: boolean;
  error?: string | null;
  body?: {
    id: number;
    name: number;
    img: string;
    materials: string[];
  };
}
export default function HometenderBanner(props: ApiData | null) {
  const recommendedHometender = props?.body;

  return (
    <Link to={`/playground/hometender`}>
      <div className={`${styles[`container`]}`}>
        {recommendedHometender ? (
          <div className={`${styles[`hometender-banner-container`]}`}>
            <p className={`${styles[`hometender-banner-title`]}`}>인기 홈텐딩 칵테일</p>
            <div className={`${styles[`hometender-banner-box`]}`}>
              <img
                src={recommendedHometender.img}
                className={`${styles[`hometender-banner-img`]}`}
                alt="추천 칵테일 이미지"
              ></img>
              <div className={`${styles[`hometender-banner-contents`]}`}>
                <p className={`${styles[`hometender-banner-mini-title`]}`}>{recommendedHometender.name}</p>
                <div>
                  {recommendedHometender.materials != null && recommendedHometender.materials.length > 1
                    ? recommendedHometender.materials.map((material) => {
                        return <div className={`${styles[`hometender-banner-materials`]}`}>{material}</div>;
                      })
                    : recommendedHometender.materials}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  );
}
