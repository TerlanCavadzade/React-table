import { useCallback, useEffect, useState } from "react";
import { Players } from "../../assets/data/result";
import ErrorComponent from "../ui/Error";
import Loading from "../ui/Loading";
import Table from "./Table";
import resultService from "../../services/resultTableService";

const ResultTable = () => {
  const [result, setResult] = useState<Players>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ cause: null | string }>({
    cause: null,
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError({ cause: null });
    try {
      const res = await resultService.getAllData();

      if (!res.success) {
        throw new Error(res.error);
      }

      setResult(res?.data || []);
    } catch (error) {
      setError({ cause: (error as Error).message });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loading />;

  if (error.cause)
    return <ErrorComponent text={error.cause} tryAgain={fetchData} />;

  return <Table players={result} />;
};

export default ResultTable;
