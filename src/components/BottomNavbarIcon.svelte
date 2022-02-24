<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
</script>

<div
  class="w-auto h-12 flex flex-col items-center justify-around"
  on:click={() => dispatch("click")}
>
  <div class="h-6 w-6 fill-rose-900">
    <slot name="icon">
      <span>No icon</span>
    </slot>
  </div>
  <slot name="text" />
</div>
