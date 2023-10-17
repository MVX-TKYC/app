import useGenericAPICall from "./useGenericAPICall";

export type ErrorCode = 1;

interface Output {
    profile: any;
    error_code: undefined | ErrorCode
}

export default function useGetProfile(address: string): Output | undefined {
    const { data } = useGenericAPICall<any>("http://127.0.0.1:8000/profile/" + address);

    if (data != undefined) {
        return data;
    }
    else {
        return undefined;
    }
}