import firebase from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import {setLogged, setMessage} from "../../actions";

export const getDataFromFirestore = async(collectionName) => {
    const documentSnapshot = await firestore()
        .collection(collectionName)
        .get();

    const allData = documentSnapshot.docs.map(doc => doc.data())

    return allData
}

export const getRowFromFirestore = async(collectionName, docId) => {
    const documentSnapshot = await firestore()
        .collection(collectionName)
        .doc(docId.toString())
        .get()

    return documentSnapshot.data()
}

export const addtoFirestore = async(collectionName, docId, idFromApi, title, posterPath) => {
    const documentRef = await firebase.firestore().collection(collectionName).doc(docId.toString()).set({
        idFromApi: idFromApi,
        title: title,
        posterPath: posterPath,
    });
}

export const deleteFromFirestore = async(collectionName, docId) => {
    const deletion = await firebase.firestore().collection(collectionName).doc(docId.toString()).delete();
}



export const signOutUser = async (navigation) => {
    try {
        await firebase.auth().signOut();
        navigation.navigate('Signin');
    } catch (e) {
        console.log(e);
    }
}

export const signInUser = async (func1, func2, navigation, email, password) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                func1
                navigation.navigate("DrawerNavigator")
            })
    } catch (e) {
        func2
    }
}
