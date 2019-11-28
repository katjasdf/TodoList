import firebase from './components/firebase'

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

const statsRef = db.collection('all').doc('stats');
const statsRef = db.collection('school').doc('stats');
const statsRef = db.collection('home').doc('stats');
const statsRef = db.collection('work').doc('stats');

const batch = db.batch();
const todoRef = db.collection('all').doc(`${Math.random()}`);

batch.set(todoRef, { title: 'New todo!' });
batch.set(statsRef, { todoCount: increment }, { merge: true });
batch.set(statsRef, { todoCount: decrement }, { merge: true });
batch.commit();