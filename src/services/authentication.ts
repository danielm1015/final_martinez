import firebase from 'firebase';

export class AuthenticationService {
    
    register(credentials) {
        return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    }
    // Object created in home.ts line 25
    signin(credentials) {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    }
    logout() {
        firebase.auth().signOut();
    }
    getActiveUser() {
        return firebase.auth().currentUser;
    }
}