import { api } from "./api";

export const getBalance = async (
  token: any,
  setBalance: (value: any) => void
) => {
  try {
    const resp = await api.get("/balance", {
      headers: {
        authorization: token,
      },
    });

    setBalance(resp.data.balance.balance);
  } catch (err) {
    console.log(err);
  }
};
