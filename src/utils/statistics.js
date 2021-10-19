import { get } from "./request";


export function getTrendData() {
    return get("/stat/trend");
}


