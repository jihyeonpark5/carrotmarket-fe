import { atom } from "recoil";

//access_token 저장소
export const tokenState = atom({
    key: 'tokenState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });