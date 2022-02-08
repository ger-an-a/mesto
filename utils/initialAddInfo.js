import { UserInfo } from "../components/UserInfo.js"
export function initialAddInfo(data, obj) {
  const info = new UserInfo(obj);
  info.setUserInfo(data.name, data.about);
  info.setAvatar(data.avatar);
  return info;
}
