import { get } from "./request";


export function rankInfo() {
    return get("/rank");
}


export function personUploadDetail(username) {
    return get("/rank/person/detail", { username: username})
}