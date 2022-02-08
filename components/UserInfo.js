export class UserInfo {
  constructor({ userNameSelector, activitySelector, avatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._activity = document.querySelector(activitySelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = { userName: this._userName.textContent, activity: this._activity.textContent }
    return userInfo;
  }

  setUserInfo(userName, activity) {
    this._userName.textContent = userName;
    this._activity.textContent = activity;
  }

  setAvatar(avatarLink) {
    this._avatar.src = avatarLink;
  }
}


