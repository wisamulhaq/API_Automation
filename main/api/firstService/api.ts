import * as apiRequest from "../../utlis/apiRequests"
import * as payloads from "./payloads"
export async function sampleRequest(url: string, headers: any) {
    const res = await apiRequest.postRequestWithBody(url, payloads.samplePayload(), headers);
    return res
}