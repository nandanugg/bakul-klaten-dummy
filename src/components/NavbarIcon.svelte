<script>
  import { createEventDispatcher } from "svelte";

  export let viewBox = "";
  export let path = "";

  let dispatch = createEventDispatcher();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-6 h-6 fill-rose-800"
  {viewBox}
  on:click={() => dispatch("click")}
>
  <path d={path} />
</svg>
