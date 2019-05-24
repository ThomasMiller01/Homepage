export default class Other {
  constructor() {
    this.isMobile = this._getMobile();
  }

  getMobile() {
    return this.isMobile;
  }

  _getMobile() {
    var mql = window.matchMedia("screen and (min-width:992px)");
    if (mql.matches) {
      return false;
    } else {
      return true;
    }
  }
}
