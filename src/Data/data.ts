import { nanoid } from 'nanoid';

interface IUser {
  id?: string;
  laps: number;
  pullUps: number;
  km: number;
  date: Date | string;
  user?: string;
}
export const getMultipleData = (user: string) => {
  let data = localStorage.getItem('running-data');

  // if doesn't have data inside local storage Create it
  if (!data) {
    localStorage.setItem(
      'running-data',
      JSON.stringify({ Andriy: [], Ivan: [] })
    );
    data = localStorage.getItem('running-data');
  }
  // if have data inside local storage Return it
  if (data) {
    JSON.parse(data)[user].forEach((run: IUser) => {
      //add id to data
      run.id = nanoid();
    });
    //If data about date activities empety add default value

    return JSON.parse(data)[user];
  }
};
//Get data from local storage
export const getData = (date: string, user: string) => {
  let data = localStorage.getItem('running-data');

  // if doesn't have data inside local storage Create it
  if (!data) {
    localStorage.setItem(
      'running-data',
      JSON.stringify({ Andriy: [], Ivan: [] })
    );
    data = localStorage.getItem('running-data');
  }
  // if have data inside local storage Return it
  if (data) {
    let res: any = {};

    JSON.parse(data)[user].forEach((run: IUser) => {
      //add id to data
      run.id = nanoid();
      return run.date === date ? (res = run) : run;
    });
    //If data about date activities empety add default value
    if (Object.keys(res).length === 0) {
      res.date = date;
      res.laps = 0;
      res.km = 0;
      res.pullUps = 0;
    }

    return res;
  }
};

//Add data to local storage
export const AddRunningData = ({ pullUps, laps, km, date, user }: IUser) => {
  let data = localStorage.getItem('running-data');

  if (data) {
    const ObjWithUserArrays = JSON.parse(data);
    let UserArray: any[] = [];
    const obj = { pullUps, laps, km, date };

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
        }
      });
    } else {
      isRepeat = false;
    }
    if (!RepeatedId) {
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

export const GetLapsSum = (user: string) => {
  const allData = getMultipleData(user);

  let res = 0;

  allData.forEach((runOoj: IUser) => {
    res += runOoj.laps;
  });

  return res;
};
