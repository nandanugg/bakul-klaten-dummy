<script>
  import { HomeViewPath } from "../../router";

  import { push } from "svelte-spa-router";
</script>

<div class="h-full px-3">
  <div class="text-lg text-center pt-16">
    Silahkan bayar dengan menggunakan VA
  </div>
  <div class="p-3 text-center border-y-2">
    <div class="text-sm">Nomor Virtual Account</div>
    <div class="text-xl">Mandiri</div>
    <div class="text-xl font-bold">123456789000</div>
  </div>
  <div class="mt-6">
    <div class="text-sm">Total Pembayaran</div>
    <div class="text-xl">Rp120.000</div>
    <div class="text-sm text-rose-800 font-bold">Lihat Cara Pembayaran</div>
  </div>
  <div class="mt-6">
    <div class="text-sm">Rincian</div>
    <div class="pb-6">
      <div class="flex items-center space-x-2 pb-2">
        <img class="h-4 w-4" src="/src/assets/shop-icon.svg" alt="" />
        <div class="text-md font-bold flex-grow">Toko Pak Slamet</div>
        <div class="">
          <div class="text-sm font-semibold">Kirim langsung</div>
          <div class="text-sm font-semibold text-right">Rp0</div>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <div
          class="h-20 w-full flex rounded border-2 space-x-2 pr-2 items-center"
        >
          <img
            class="w-1/4 h-full object-cover"
            src="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-sego-wiwit.jpg?resize=637%2C451"
            alt=""
          />
          <div class="flex-grow">
            <div class="text-md font-bold">Nasi rames</div>
            <div class="text-sm">1.1 KM</div>
            <div class="text-md">Rp20.000</div>
          </div>
          <div class="flex">
            <div class="">
              <div class="text-md text-center pb-2">Jumlah: 2</div>
            </div>
          </div>
        </div>
        <div
          class="h-20 w-full flex rounded border-2 space-x-2 pr-2 items-center"
        >
          <img
            class="w-1/4 h-full object-cover"
            src="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-sego-wiwit.jpg?resize=637%2C451"
            alt=""
          />
          <div class="flex-grow">
            <div class="text-md font-bold">Nasi rames</div>
            <div class="text-sm">1.1 KM</div>
            <div class="text-md">Rp20.000</div>
          </div>
          <div class="flex">
            <div class="">
              <div class="text-md text-center pb-2">Jumlah: 2</div>
            </div>
          </div>
        </div>
        <div
          class="h-20 w-full flex rounded border-2 space-x-2 pr-2 items-center"
        >
          <img
            class="w-1/4 h-full object-cover"
            src="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-sego-wiwit.jpg?resize=637%2C451"
            alt=""
          />
          <div class="flex-grow">
            <div class="text-md font-bold">Nasi rames</div>
            <div class="text-sm">1.1 KM</div>
            <div class="text-md">Rp20.000</div>
          </div>
          <div class="flex">
            <div class="">
              <div class="text-md text-center pb-2">Jumlah: 2</div>
            </div>
          </div>
        </div>
        <div
          class="h-20 w-full flex rounded border-2 space-x-2 pr-2 items-center"
        >
          <img
            class="w-1/4 h-full object-cover"
            src="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-sego-wiwit.jpg?resize=637%2C451"
            alt=""
          />
          <div class="flex-grow">
            <div class="text-md font-bold">Nasi rames</div>
            <div class="text-sm">1.1 KM</div>
            <div class="text-md">Rp20.000</div>
          </div>
          <div class="flex">
            <div class="">
              <div class="text-md text-center pb-2">Jumlah: 2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm font-bold text-rose-800 text-center mt-6">
        Lihat lebih detail
      </div>
    </div>
  </div>
  <div
    on:click={() => push(HomeViewPath)}
    class="text-lg bg-rose-800 p-3 text-white text-center rounded my-6"
  >
    Kembali
  </div>
</div>
