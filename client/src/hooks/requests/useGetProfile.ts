import useGenericAPICall from "./useGenericAPICall";

export default function useGetProfile(address: string) {
    const { data } = useGenericAPICall<any>("http://127.0.0.1:8000/profile/" + address);

    console.log(data)

    if (data != undefined) {
        return data["profile"];
    }
    else {
        return undefined;
    }
}