/**
 * This function will be called by SvelteKit when this route loads (or when the [id] changes).
 * It will load the friends of the person with the given id.
*/

//“读取父级 layout 的 load() 返回的数据” 
export async function load({ fetch, params, parent }) {
  //调用“最近一层父 layout 的 load()”，并拿到它 return 的数据  parent()内置提供的函数
  const parentData = await parent();
  const person = parentData.people.find((p) => p.id == params.id);
  const name = person.firstName;

  // In addition, we are fetching more data, getting the friends of that person.
  const friendsResponse = await fetch(
    `https://people-db.trex-sandwich.com/people/${params.id}/friends`
  );
  const friends = await friendsResponse.json();

  // Return the original person's name, and that person's friends.
  return { name, friends };
}


export async function load({fetch , params ,parent}){
  const parentData = await parent();
  const person  =  parentData.people
}