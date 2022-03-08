interface IUser {
  laps: number;
  km: number;
  date: Date | string;
  user?: string;
}

export const getData = (date: string, user: string) => {
  let data = localStorage.getItem('running-data');
  if (!data) {
    localStorage.setItem(
      'running-data',
      JSON.stringify({ Andriy: [], Ivan: [] })
    );
    data = localStorage.getItem('running-data');
  }
  if (data) {
    let res: any = {};
    JSON.parse(data)[user].forEach((run: IUser) => {
      return run.date === date ? (res = run) : run;
    });
    if (Object.keys(res).length === 0) {
      res.date = date;
      res.laps = 0;
      res.km = 0;
    }
    return res;
  }
};

export const AddRunningData = ({ laps, km, date, user }: IUser) => {
  let data = localStorage.getItem('running-data');

  if (data) {
    const ObjWithUserArrays = JSON.parse(data);
    let UserArray: any[] = [];
    const obj = { laps, km, date };

    const keys = Object.keys(ObjWithUserArrays);
    let SelectedUser = '';
    let isRepeat = true;
    let RepeatedId = 0;

    keys.forEach((arrayName) => {
      if (arrayName === user) {
        UserArray = ObjWithUserArrays[arrayName];
        SelectedUser = arrayName;
      }
    });
    if (UserArray.length >= 1) {
      UserArray.forEach((runResult, id) => {
        if (runResult.date === obj.date) {
          isRepeat = true;
          RepeatedId = id;
        } else {
          isRepeat = false;
        }
      });
    } else {
      isRepeat = false;
    }
    if (!isRepeat) {
      UserArray.push(obj);
    } else {
      UserArray[RepeatedId] = obj;
    }
    ObjWithUserArrays[SelectedUser] = UserArray;
    const res = JSON.stringify(ObjWithUserArrays);
    localStorage.setItem('running-data', res);
  }
};
