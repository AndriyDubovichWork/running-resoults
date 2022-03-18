import { GetLapsSum } from './../Data/data';

const WhoIsBoss = (users: string[]) => {
  let Boss = '';
  let bossValue = 0;
  users.forEach((user) => {
    const userValue = GetLapsSum(user);
    if (userValue > bossValue) {
      bossValue = userValue;
      Boss = user;
    }
  });

  return Boss;
};

export default WhoIsBoss;
