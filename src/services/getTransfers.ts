import { api } from "./api";

export const getTransfers = async (
  token: any,
  setTransfersList: (value: any) => void
) => {
  try {
    const resp = await api.get("/transactions", {
      headers: {
        authorization: token,
      },
    });

    setTransfersList(resp.data.transactions);
  } catch (err) {
    console.log(err);
  }
};
