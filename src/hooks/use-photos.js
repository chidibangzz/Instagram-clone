import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export default function usePhotos() {
  const [photos, setPhotos] = useState();
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimeLinePhotos() {
      // example: [2,1,5] <- being Ralpheal
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];

      // does the user actuallly follow people
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      // re-arranges array to be newest photos first by date created.
      //   followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    getTimeLinePhotos();
  }, [userId]);

  return { photos };
}
