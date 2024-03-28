import resultTable from "../../assets/data/result";
import liveTable from "../../assets/data/live";

const fetchResult = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return resultTable;
};

const fetchLive = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return liveTable;
};

export default { fetchResult, fetchLive };
