import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    const formatResult = (result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
    });

    return [formatResult(userResult), formatResult(photoResult)];
  } catch (error) {
    return [{ status: 'rejected', value: error.toString() }, { status: 'rejected', value: error.toString() }];
  }
};

export default handleProfileSignup;
