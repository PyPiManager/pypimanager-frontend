import { post } from "./request";

export function deletePackage(packageName) {
    let payload = new FormData();
    payload.append("package", packageName);
    return post("/package/delete", payload);
  }