import { firebaseDB } from '../store/firebase';

export async function getAllPupils() {
  try {
    const querySnapshot = await firebaseDB.collection('users').get();
    return querySnapshot.docs.map((userData) => {
      const user = userData.data();
      user.id = userData.id;
      return user;
    });
  } catch (error) {
    throw new Error(error);
  }
}

export function something() {
  return 'something';
}
