import{
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
    setDoc,
    collectionGroup,
    Timestamp,


} from "firebase/firestore";
import {firestoreDb} from "./firebase";

export const queryByCollection=async (col:string) =>{
    const colRef = collection(firestoreDb,col);

    const snapshot = await getDocs(colRef);

    const docs = Array.from(snapshot.docs).map((doc)=>{
        return{
            ...doc.data(),
            id:doc.id,
        };
    });
    return docs;

};
export const set = async (col:string , document:Object)=>{
    await setDoc(doc(collection(firestoreDb,col)),document,)
};
export const add = async (col:string,document:Object)=>{
    const colRef = collection(firestoreDb,col);
    const docRef = await addDoc(colRef, document);

return docRef;
};
export const del = async (col,id)=>{
    const docRef = await doc(firestoreDb,col,id);


return await deleteDoc(docRef);
};



