export default authAction = (userdata) => {
  return ({
    type: "AUTH_USER",
    payload: userdata
  })
}