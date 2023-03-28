import getApiInstance from "./http";

const api = getApiInstance();

// 주종별 전체 술 목록 페이지
// 주종별 전체 술 리스트 조회
export const apiGetDrinkList = async (type: string) => {
  try {
    const response = await api.get(`/list/${type}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 술 상세 페이지
// 술 상세 페이지 조회 - 홈텐더 포함
export const apiGetDrinkDetail = async (type: string, drinkId: number) => {
  try {
    const response = await api.get(`list/${type}/${drinkId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 술 상세 페이지에서 스크랩
export const apiGetLoginRecommendedByType = async (type: string, drinkId: number, data: any[]) => {
  try {
    const response = await api.put(`/scrap/${type}/${drinkId}`, data);
    return response;
  } catch (e) {
    console.log(e);
  }
};
