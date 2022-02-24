<script>
  import { PaymentViewPath } from "../../router";

  import { push } from "svelte-spa-router";

  import CartItemEntry from "/src/components/CartItemEntry.svelte";
  import ItemEntry from "/src/components/ItemEntry.svelte";
  import NavbarWithBack from "/src/components/NavbarWithBack.svelte";
</script>

<div class="bg-slate-100 h-full">
  <NavbarWithBack title="Keranjang" />
  <div class="p-3 bg-white">
    <div class="text-lg font-bold pb-4">Barang yang dibeli</div>
    <div class="pb-6">
      <div class="flex items-center space-x-2 pb-2">
        <img class="h-4 w-4" src="/src/assets/shop-icon.svg" alt="" />
        <div class="text-md font-bold flex-grow">Toko Pak Slamet</div>
        <div class="">
          <div class="flex items-center space-x-1">
            <div class="text-sm font-semibold text-rose-800">
              Kirim langsung
            </div>
            <div class="w-2 fill-rose-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 320 512"
                ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                  d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"
                /></svg
              >
            </div>
          </div>

          <div class="text-sm font-semibold text-right">Rp0</div>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <CartItemEntry />
        <CartItemEntry />
        <CartItemEntry />
      </div>
      <div class="flex items-center pt-3">
        <div class="text-lg font-bold pl-3 flex-grow">Total: Rp60.000</div>
        <div class="text-lg font-bold pr-3">Jumlah: 6</div>
      </div>
    </div>
    <div class="pb-6">
      <div class="flex items-center space-x-2 pb-2">
        <img class="h-4 w-4" src="/src/assets/shop-icon.svg" alt="" />
        <div class="text-md font-bold flex-grow">Toko Pak Slamet</div>
        <div class="">
          <div class="flex items-center space-x-1">
            <div class="text-sm font-semibold text-rose-800">
              Kirim langsung
            </div>
            <div class="w-2 fill-rose-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 320 512"
                ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                  d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"
                /></svg
              >
            </div>
          </div>

          <div class="text-sm font-semibold text-right">Rp0</div>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <CartItemEntry />
        <CartItemEntry />
        <CartItemEntry />
      </div>
      <div class="flex items-center pt-3">
        <div class="text-lg font-bold pl-3 flex-grow">Total: Rp60.000</div>
        <div class="text-lg font-bold pr-3">Jumlah: 6</div>
      </div>
    </div>
    <div class="flex sticky bottom-16 bg-white py-3 border-t-2">
      <div class="flex-grow">
        <div class="text-sm">Total</div>
        <div class="text-xl font-bold">Rp 120.000</div>
      </div>
      <div
        on:click={() => push(PaymentViewPath)}
        class="p-3 rounded text-center text-sm font-bold bg-rose-800 text-white"
      >
        Bayar
      </div>
    </div>
  </div>
</div>
