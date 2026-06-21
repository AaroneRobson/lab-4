// BEGIN
const getMutualFriends = (person1, person2) => {
  const firstFriends = person1.getFriends();
  const secondFriends = person2.getFriends();
  
  return firstFriends.filter(friendA => 
    secondFriends.some(friendB => friendB.id === friendA.id)
  );
};

export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice();
  },
});