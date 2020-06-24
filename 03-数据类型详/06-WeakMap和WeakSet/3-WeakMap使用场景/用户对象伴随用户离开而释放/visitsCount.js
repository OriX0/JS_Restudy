let visitsCountMap = new Map();
function countUser (user) {
  let count = visitsCountMap.get(user);
  visitsCountMap.set(user, count + 1);
}
export default countUser;