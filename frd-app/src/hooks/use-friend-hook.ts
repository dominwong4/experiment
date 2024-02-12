import { getFriendById } from "@/actions/friends";
import { useQuery } from "@tanstack/react-query";

export default function useFriendHook(id:string) {
    return useQuery({queryKey: ['friend',id], queryFn: async ()=> await getFriendById(id)});
}