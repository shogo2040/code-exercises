// Graph (an abstract data structure)
// Breadth first search

export function breadthFirstSearch(me, graph) {
  const friends = graph.get(me).friends;
  let foundFriend;

  while (friends && friends.length > 0) {
    for (const friend of friends) {
      const friendObj = graph.get(friend);

      if (!friendObj) {
        continue;
      }

      if (friendObj.isMangoSeller) {
        foundFriend = friendObj;
        break;
      } else {
        const theirFriends = friendObj.friends;
        for (const theirFriend of theirFriends) {
          if (friends.includes(theirFriend)) {
            continue;
          }
          friends.push(theirFriend);
        }
      }
    }

    if (foundFriend && foundFriend.isMangoSeller) {
      break;
    }

    friends.shift();
  }

  return foundFriend;
}
