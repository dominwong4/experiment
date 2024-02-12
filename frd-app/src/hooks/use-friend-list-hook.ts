import { getFriendsData } from "@/actions/friends";
import { useQuery } from "@tanstack/react-query";

export default function useFriendListHook() {
    return useQuery({queryKey: ['friends'], queryFn: getFriendsData});
}