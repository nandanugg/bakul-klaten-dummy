<script>
  import { createEventDispatcher } from "svelte";
  export let name = "";

  const dispatch = createEventDispatcher();

  function dispatchOnClick() {
    dispatch("click");
  }
</script>

<div
  class="flex flex-col items-center cursor-pointer"
  on:click={dispatchOnClick}
>
  <div class="w-14 h-14">
    <slot />
  </div>
  <div class="text-xs text-center">{name}</div>
</div>
