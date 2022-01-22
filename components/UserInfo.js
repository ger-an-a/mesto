export class UserInfo {
  constructor({ userNameSelector, activitySelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._activity = document.querySelector(activitySelector);
  }

  getUserInfo() {
    const userInfo = { userName: this._userName.textContent, activity: this._activity.textContent }
    return userInfo;
  }

  setUserInfo(userName, activity) {
    this._userName.textContent = userName;
    this._activity.textContent = activity;
  }
}


