<script>
  import { PostPaymentViewPath } from "../../router";

  import { push } from "svelte-spa-router";

  import NavbarWithBack from "/src/components/NavbarWithBack.svelte";
</script>

<div>
  <NavbarWithBack title="Pembayaran" />
  <div class="px-3 pt-6">
    <div class="text-lg font-bold">Metode Pembayaran</div>
    <div class="pt-2">
      <div class="text-lg font-bold" />
      <div class="p-3 border-2 rounded">
        <div class="flex items-center">
          <div class="flex-grow">Bayar langsung</div>
          <input type="radio" class="w-4 h-4" name="" id="" />
        </div>
      </div>
      <div class="pt-4">
        <div class="text-sm font-bold">Virtual Account</div>
        <div class="flex flex-col space-y-2">
          <div class="p-3 border-2 rounded">
            <div class="flex items-center">
              <div class="flex-grow">Bank Mandiri</div>
              <input type="radio" class="w-4 h-4" name="" id="" />
            </div>
          </div>
          <div class="p-3 border-2 rounded">
            <div class="flex items-center">
              <div class="flex-grow">BCA</div>
              <input type="radio" class="w-4 h-4" name="" id="" />
            </div>
          </div>
          <div class="p-3 border-2 rounded">
            <div class="flex items-center">
              <div class="flex-grow">BTN</div>
              <input type="radio" class="w-4 h-4" name="" id="" />
            </div>
          </div>
          <div class="p-3 border-2 rounded">
            <div class="flex items-center">
              <div class="flex-grow">BRI</div>
              <input type="radio" class="w-4 h-4" name="" id="" />
            </div>
          </div>
          <div class="p-3 border-2 rounded">
            <div class="flex items-center">
              <div class="flex-grow">BNI</div>
              <input type="radio" class="w-4 h-4" name="" id="" />
            </div>
          </div>
        </div>
      </div>
      <div
        on:click={() => push(PostPaymentViewPath)}
        class="p-3 my-6 text-center font-bold bg-rose-800 text-white rounded"
      >
        Bayar
      </div>
    </div>
  </div>
</div>
