export default (userdata) => {
  return ({
    type: "AUTH_USER",
    payload: userdata
  })
}