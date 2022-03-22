import { atom, useRecoilState } from 'recoil';
import moment from 'moment';

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
