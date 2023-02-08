import { collection, Firestore, getDocs, addDoc } from 'firebase/firestore/lite';

export async function getRecipients(db: Firestore) {
	const recipientsCol = collection(db, 'recipients');
	const recipientsSnapshot = await getDocs(recipientsCol);
	const recipientsList = recipientsSnapshot.docs.map((doc) => doc.data());
	return recipientsList;
}

export async function createRecipient(db: Firestore, payload: unknown) {
	await addDoc(collection(db, 'recipients'), payload);
}
