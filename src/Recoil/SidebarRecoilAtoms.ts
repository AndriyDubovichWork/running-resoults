import { atom, useRecoilState } from 'recoil';

import moment from 'moment';

import WhoIsBoss from '../helper/WhoIsBoss';
import { GetLapsSum } from '../Data/data';
import ReturnRung from '../helper/returnRung';

const UserArray = ['Andriy', 'Ivan'];

const RungObj = ReturnRung(GetLapsSum('Andriy'));

export const DateA = atom({
  key: 'SideBar Date',
  default: new Date(moment().format()),
});
export const LapsA = atom({
  key: 'SideBar Laps',
  default: '',
});
export const KmA = atom({
  key: 'SideBar Kms',
  default: '',
});
export const PullUpsA = atom({
  key: 'SideBar PullUps',
  default: '',
});

export const UserA = atom({
  key: 'SideBar User',
  default: 'Andriy',
});

export const UserBossA = atom({
  key: 'SideBar Boss User',
  default: WhoIsBoss(UserArray),
});
export const LapsSumA = atom({
  key: 'SideBar Laps Sum',
  default: GetLapsSum('Andriy'),
});
export const RunkA = atom({
  key: 'SideBar Runk',
  default: RungObj.Rung,
});
export const RunkPrecentA = atom({
  key: 'SideBar Runk Precent',
  default: RungObj.precent,
});
export const IsSideBarOpenA = atom({
  key: 'SideBar Is SideBar Open',
  default: false,
});
export const UserDataA = atom({
  key: 'SideBar User Data',
  default: {
    labels: [1, 2],
    datasets: [
      {
        label: 'hi',
        data: [5, 50],
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  },
});
