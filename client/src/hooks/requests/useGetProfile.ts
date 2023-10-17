import useGenericAPICall from "./useGenericAPICall";

interface Output {
    profile: any;
    error: {
        description: string;
    }
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