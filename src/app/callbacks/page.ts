import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { useCallbackFacade } from "./callbacks.facade";

export default async function handler() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  console.log(accessToken);
  redirect("/");
}
