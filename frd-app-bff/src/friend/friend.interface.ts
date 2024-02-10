type FriendName = {
    last?: string,
    first?: string
}

type FriendLocation = {
    latitude? : number,
    longitude? : number
}

export interface Friend {
    "_id": string,
    "name": FriendName,
    "email": string,
    "pricture": string,
    "location": FriendLocation
}
