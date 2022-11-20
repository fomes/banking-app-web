import Swal from "sweetalert2";
import { api } from "./api";

export const handleTransfer = async (
  userTarget: string,
  amount: number,
  token: string | null
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

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Transferência realizada com sucesso!!",
    }).then(() => {
      location.reload();
    });
  } catch (err: any) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: err?.response?.data?.error,
    });
  }
};
