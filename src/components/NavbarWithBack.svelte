<script>
  import { pop } from "svelte-spa-router";

  import NavbarIcon from "./NavbarIcon.svelte";
  export let title = "Title";
</script>

<div class="border-b h-16 sticky top-0 bg-white">
  <div class="flex space-x-5 h-full items-center" on:click={pop}>
    <div class="pl-6 py-2">
      <NavbarIcon
        viewBox="0 0 448 512"
        path="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
      />
    </div>
    <div class="text-xl font-semibold">{title}</div>
  </div>
</div>
