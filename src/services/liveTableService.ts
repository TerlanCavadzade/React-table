import fetch from "../utils/fakeApi";

const getAllData = async () => {
  try {
    const res = await fetch.fetchLive();

    // simulate error
    // throw new Error("something went wrong")

    return {
      data: res,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: (error as Error).message,
    };
  }
};

export default { getAllData };
