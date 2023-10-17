import useGenericAPICall from "./useGenericAPICall";

export interface ProfileError {
    title: string;
    description: string;
}

interface Output {
    profile: any;
    error: ProfileError
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