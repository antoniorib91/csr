export class Storage {

  private static USERKEY = 'SessionUser'

  public static getUser(): object | null {
    const usr = localStorage.getItem(this.USERKEY)
    return usr ? JSON.parse(usr): null;
  }

  public static setUser(value: object) {
    localStorage.setItem(this.USERKEY, JSON.stringify(value));
  }

}