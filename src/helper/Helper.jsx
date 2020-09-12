export const handleError = (err, history) => {
  switch (err.response.status) {
    case 500:
      history.push("/500");
      break;
    case 404:
      history.push("/404");
      break;
    default:
      history.push("/404");
      break;
  }
};
