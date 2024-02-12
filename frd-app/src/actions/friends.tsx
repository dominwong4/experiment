import axios from 'axios';

export async function getFriendById(id: string) {
  try {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/friends/${id}`);
    return data.data;
  } catch (e) {
    throw e;
  }
}

export async function getFriendsData() {
  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/friends`
    );
    return data.data;
  } catch (e) {
    throw e;
  }
}
