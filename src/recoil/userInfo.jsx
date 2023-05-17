import { atom } from 'recoil';

export const userInfo = atom({
  key: 'userInfo',
  default: {
    userId:'',
    usernickname:'',
    userAddress1depth:'',
    userAddress2depth:'',
    userAddress3depth:'',
    userAddressX:'',
    userAddressY:''
  },
});