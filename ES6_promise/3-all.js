import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {

  Promise.all(promises)
    .then((results) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
