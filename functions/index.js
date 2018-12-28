const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then((doc) => {
      console.log('Notification added', doc);
    })
}

exports.blogpostCreated = functions.firestore
  .document('blogposts/{blogpostId}')
  .onCreate((doc) => {
    const blogpost = doc.data();
    const notification = {
      content: 'Added a new blogpost',
      user: `${blogpost.authorFirstName} ${blogpost.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
})

exports.userJoined = functions.auth
  .user()
  .onCreate((user) => {


    return admin
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        const newUser = doc.data();
        const notification = {
          content: 'Welcome Boss',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
      })
})
