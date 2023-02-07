import { collection, Firestore, getDocs } from 'firebase/firestore/lite';

export async function getRecipients(db: Firestore) {
	const recipientsCol = collection(db, 'recipients');
	const recipientsSnapshot = await getDocs(recipientsCol);
	const recipientsList = recipientsSnapshot.docs.map((doc) => doc.data());
	return recipientsList;
}
