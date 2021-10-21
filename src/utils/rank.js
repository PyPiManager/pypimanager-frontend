import { get } from "./request";


export function rankInfo(limit) {
    return get("/rank", {limit: limit});
}


export function personUploadDetail(username) {
    return get("/rank/person/detail", { username: username})
}