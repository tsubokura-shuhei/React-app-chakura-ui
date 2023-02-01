/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

import { user } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<user>>([]);
  const { showMessage } = useMessage();

  const getUser = useCallback(() => {
    setloading(true);
    axios
      .get<Array<user>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setloading(false);
      });
  }, []);
  return { getUser, loading, users };
};
