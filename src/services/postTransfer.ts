import { api } from "./api";

export const handleTransfer = async (
  userTarget: string,
  amount: number,
  token: string | null,
  setError: (value: string) => void
) => {
  try {
    await api.post(
      "/cashout",

      {
        userCashIn: userTarget,
        amount: Number(amount),
      },

      {
        headers: {
          authorization: token,
        },
      }
    );

    alert("Transferência realizada com sucesso!");
    location.reload();
  } catch (err) {
    alert(err?.response?.data?.error);
  }
};
