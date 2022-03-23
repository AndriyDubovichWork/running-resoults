type RunsType = {
  date: any;
  km: number;
  laps: number;
  pullUps: number;
};

const SortByDate = (ArrayOfRuns: RunsType[]) => {
  if (ArrayOfRuns) {
    ArrayOfRuns = ArrayOfRuns.map((Run) => {
      return {
        km: Run.km,
        laps: Run.laps,
        pullUps: Run.pullUps,
        date: new Date(Run.date).getTime(),
      };
    });
    ArrayOfRuns = ArrayOfRuns.sort((a, b) => a.date - b.date);
    ArrayOfRuns = ArrayOfRuns.map((run) => {
      return {
        km: run.km,
        laps: run.laps,
        pullUps: run.pullUps,
        date: new Date(run.date).toISOString().split('T')[0],
      };
    });
    return ArrayOfRuns;
  }
};

export default SortByDate;
