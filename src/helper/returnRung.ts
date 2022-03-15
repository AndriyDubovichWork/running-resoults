const ReturnRung = (lapsSum: number) => {
  const RungsArr = [
    { max: 0, min: 0, rang: 'loh' },
    { max: 100, min: 1, rang: 'chicken' },
    { max: 500, min: 100, rang: 'koala' },
    { max: 1000, min: 500, rang: '1' },
    { max: 2000, min: 1000, rang: '2' },
    { max: 5000, min: 2000, rang: '3' },
    { max: 7500, min: 5000, rang: '4' },
    { max: 10000, min: 7500, rang: '5' },
  ];

  let Rung = 'dont know';
  let precent = 0;
  RungsArr.forEach((rungObj) => {
    if (lapsSum >= rungObj.min && lapsSum <= rungObj.max) {
      Rung = rungObj.rang;
      precent = (lapsSum * 100) / rungObj.max;
      if (!precent) {
        precent = 0;
      }
    }
  });

  return { Rung, precent };
};

export default ReturnRung;
