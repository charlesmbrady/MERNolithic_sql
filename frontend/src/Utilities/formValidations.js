export default {
  firstName(value) {
    if (!value || value.length == 0) {
      return 'First Name is required';
    }
  },
};
