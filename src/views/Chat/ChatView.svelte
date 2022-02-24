<script>
  import { ChatDetailViewPath } from "../../router";

  import { push } from "svelte-spa-router";

  import NavbarWithBack from "/src/components/NavbarWithBack.svelte";
</script>

<div>
  <NavbarWithBack title="Pesan" />
  <div class="px-3">
    <div
      class="flex items-center space-x-2 border-b py-2"
      on:click={() => push(ChatDetailViewPath)}
    >
      <img
        class="w-12 h-12 rounded-full"
        src="https://icotar.com/avatar/"
        alt=""
      />
      <div class="flex-grow">
        <div class="text-md font-bold">Pak Minto</div>
        <div class="text-sm text-slate-800">Ini mau dikirim pakai apa?</div>
      </div>
      <div class="">
        <div
          class="text-sm font-bold pl-1 bg-rose-800 text-white rounded-full w-4 h-4"
        >
          1
        </div>
      </div>
    </div>
    <div
      class="flex items-center space-x-2 border-b py-2"
      on:click={() => push(ChatDetailViewPath)}
    >
      <img
        class="w-12 h-12 rounded-full"
        src="https://icotar.com/avatar/"
        alt=""
      />
      <div class="flex-grow">
        <div class="text-md font-bold">Pak Minto</div>
        <div class="text-sm text-slate-800">Ini mau dikirim pakai apa?</div>
      </div>
      <div class="">
        <div
          class="text-sm font-bold pl-1 bg-rose-800 text-white rounded-full w-4 h-4"
        >
          1
        </div>
      </div>
    </div>
    <div
      class="flex items-center space-x-2 border-b py-2"
      on:click={() => push(ChatDetailViewPath)}
    >
      <img
        class="w-12 h-12 rounded-full"
        src="https://icotar.com/avatar/"
        alt=""
      />
      <div class="flex-grow">
        <div class="text-md font-bold">Pak Minto</div>
        <div class="text-sm text-slate-800">Ini mau dikirim pakai apa?</div>
      </div>
      <div class="">
        <div
          class="text-sm font-bold pl-1 bg-rose-800 text-white rounded-full w-4 h-4"
        >
          1
        </div>
      </div>
    </div>
  </div>
</div>
