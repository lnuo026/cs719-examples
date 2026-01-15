// uuid 是一个 第三方 npm 库，专门用来生成 ，全世界几乎不可能重复的唯一 ID
import { v4 as uuid } from "uuid";
import { writable } from "svelte/store";

const INITIAL_THINGS = [
  { id: uuid(), description: "Finding matching socks on the first try" },
  { id: uuid(), description: "Accidentally adulting successfully" },
  { id: uuid(), description: "When the Wi-Fi connects instantly" },
  { id: uuid(), description: "Eating pizza without dropping any toppings" },
  { id: uuid(), description: "Remembering why you walked into a room" },
  { id: uuid(), description: "Winning an argument with yourself in the shower" }
];

// 一个“全局可响应的数组”
export const favouriteThingsStore = writable(INITIAL_THINGS);

/**
 * Adds a new favourite thing.
 *
 * This (and all other functions in this file) use the Svelte store's update() function. This takes a callback
 * which has one argument, which will be the current value of the store. In this case, that will be the current
 * array of all favourite things.
 *
 * The callback function should return the new value of the store - which in this case, should be a new array
 * with one extra thing (newThing). As you can see below, we use JavaScript's spread operator to easily
 * accomplish this.
 *
 * @param {string} description the description of the new favourite thing to add.
 */
export function addThing(description) {
  // // 创建一条新的 favourite thing
  const newThing = { id: uuid(), description };
  // store.update((当前值things) => 新值 ),把它加到 store 里的数组末尾;
  favouriteThingsStore.update((things) => [...things, newThing]);
}

/** 
 * This time we are using update() in combination with JavaScript array's filter() function to filter
 * out the thing with the matching id. This will result in the creation of a new array containing everything
 * except the thing with the given id.
 *
 * @param {string} id the id of the thing to remove
 */
export function removeThing(id) {
  favouriteThingsStore.update((things) => things.filter((t) => t.id !== id));
}

/**
 * This time we are using update() in combination with JavaScript array's map() function to return a new array
 * where every item is the same, except the thing we want to modify. For that one thing, we create and return a
 * new object with the same id and modified description.
 *
 * This code can be tricky to understand, but this is a common pattern. Refer back to this example often when
 * required.
 *
 * @param {string} id the id of the thing to modify
 * @param {string} newDescription the new description
 */


//在 favouriteThingsStore 里，找到 id 相同的那一项，把它的 description 改掉，其他项保持不变。
    //map()：一个一个“检查 + 生成新数组” ，things 是 store 当前的“旧值”
    //数组里本来放的就是“对象”， 改其中一个”，就必须“返回一个新的对象来替换它”。
export function editThing(id, newDescription) {
  favouriteThingsStore.update((things) =>
    things.map((t) => {
      // Where, if the id of the thing at that index matches the supplied id, create a new object...
      if (t.id === id) return { id, description: newDescription };
      return t;
    })
  );
}
