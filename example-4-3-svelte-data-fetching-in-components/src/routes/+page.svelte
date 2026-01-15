<script>
  import { onMount } from "svelte";
  import PersonFriends from "$lib/components/PersonFriends.svelte";

  let people = [];
  let currentPerson = null;

  /**
   * Asynchronously fetch a list of all people from trex-sandwich.
   */
  async function fetchPeople() {
    const response = await fetch("https://people-db.trex-sandwich.com/people");
    // data 一般是一个数组，比如：[{...},{...},{...}]
    const data = await response.json();
    //“当前正在查看 / 使用的那个人” ， 它是 一个对象，不是数组 ，“默认选中第一个人”
    currentPerson = data[0];
    // 	把整个数组保存到 people ，源数组保留
    people = data;
  }

  // Run the above function once, when this component first loads.
  onMount(fetchPeople);
</script>

<h1>Svelte data fetching example</h1>

<div class="container">
  <div>
    <h2>People</h2>
    <!-- Display a list of all people loaded from trex-sandwich. -->
    {#each people as person (person.id)}
      <!--
     For each one, display a button. When clicked, set the currentPerson to that person.
    点击这个按钮时：把 currentPerson 设为你点的那个人。  
      加括号的作用只有一个： 明确告诉 JS：这是一个表达式 ，只是一个正常的 赋值表达式 
      -->
      <button class="person" on:click={() => (currentPerson = person)}>
        <h3>{person.firstName} {person.lastName}</h3>
        <p>{person.info}</p>
      </button>
    {/each}
  </div>

  <!-- If we have a currentPerson, display their friends. -->
  {#if currentPerson}
    <div>
      <h2>{currentPerson.firstName}'s friends</h2>
      <PersonFriends id={currentPerson.id} />
    </div>
  {/if}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    & > div {
      border: 1px dashed lightgray;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .person {
    cursor: pointer;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0.2rem;

    &:nth-child(odd) {
      background-color: rgb(182, 212, 238);
    }

    &:hover {
      background-color: rgb(138, 161, 180);
    }
  }
</style>
