<script>
  import Navbar from "/src/components/Navbar.svelte";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { push } from "svelte-spa-router";
  import { CartViewPath, ChatDetailViewPath } from "../../router";
  let options = {};
</script>

<div class="bg-slate-100 h-full">
  <Navbar withBack={true} />
  <div class="bg-white pb-4 mb-3">
    <Splide {options}>
      <SplideSlide>
        <img
          src="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-geplak.jpg?resize=637%2C425"
          alt="geplak"
          class="object-fill"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-kripik-belut.jpg?resize=637%2C427"
          alt="kripik belut"
          class="object-fill"
        />
      </SplideSlide>
    </Splide>
    <div class="pt-4 px-3 flex flex-col space-y-1">
      <div class="text-2xl font-bold">Geplak & Kripik Belut</div>

      <div class="flex-grow space-y-1">
        <div class="flex items-center space-x-1">
          <div class="text-md">Rp10.000</div>
          <div class="text-sm text-slate-800">/ KG</div>
        </div>
        <div class="truncate text-slate-600 text-md">
          ⭐️ (4.4) dari 400 pembeli
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white px-4 py-4 mb-3">
    <div class="text-sm pb-2 font-semibold">Pengiriman</div>
    <div class="flex items-center space-x-2">
      <div class="flex-grow">
        <div class="text-md font-semibold">Kirim langsung kerumah (COD)</div>
        <div class="text-sm">Rp0</div>
        <div class="flex space-x-1 pt-4">
          <div class="text-xs font-semibold text-rose-800">
            Opsi pengiriman lain
          </div>
          <div class="w-2 fill-rose-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 320 512"
              ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"
              /></svg
            >
          </div>
        </div>
      </div>
      <div
        on:click={() => push(CartViewPath)}
        class="p-3 rounded text-center text-sm font-bold bg-rose-800 text-white"
      >
        Beli
      </div>
    </div>
  </div>
  <div class="bg-white px-4 py-4 mb-3">
    <div class="text-sm pb-2 font-semibold">Informasi Penjual</div>
    <div class="flex items-center space-x-2">
      <img
        src="https://t-2.tstatic.net/jogja/foto/bank/images/Inilah-Sosok-Tugimin-Perintis-Sop-Ayam-Pak-Min-Klaten.jpg"
        alt="profile"
        class="h-12 w-12 rounded-full"
      />
      <div class="flex-grow">
        <div class="text-md font-semibold">Sate Ayam Pak Min</div>
        <div class="flex items-center space-x-1">
          <div class="w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
              ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                d="M352 48C352 21.49 373.5 0 400 0C426.5 0 448 21.49 448 48C448 74.51 426.5 96 400 96C373.5 96 352 74.51 352 48zM480 159.1C497.7 159.1 512 174.3 512 191.1C512 209.7 497.7 223.1 480 223.1H416C408.7 223.1 401.7 221.5 396 216.1L355.3 184.4L295 232.9L337.8 261.4C346.7 267.3 352 277.3 352 288V416C352 433.7 337.7 448 320 448C302.3 448 288 433.7 288 416V305.1L227.5 266.8C194.7 245.1 192.5 198.9 223.2 175.2L306.3 110.9C323.8 97.45 348.1 97.58 365.4 111.2L427.2 159.1H480zM256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384zM128 312C88.24 312 56 344.2 56 384C56 423.8 88.24 456 128 456C167.8 456 200 423.8 200 384C200 344.2 167.8 312 128 312zM640 384C640 454.7 582.7 512 512 512C441.3 512 384 454.7 384 384C384 313.3 441.3 256 512 256C582.7 256 640 313.3 640 384zM512 312C472.2 312 440 344.2 440 384C440 423.8 472.2 456 512 456C551.8 456 584 423.8 584 384C584 344.2 551.8 312 512 312z"
              /></svg
            >
          </div>
          <div class="flex space-x-1">
            <div class="text-xs whitespace-nowrap">1.1 KM</div>
            <div class="text-xs text-slate-600 text-md">(Desa Ceper)</div>
          </div>
        </div>
      </div>
      <div
        on:click={() => push(ChatDetailViewPath)}
        class="text-sm rounded p-2 bg-rose-800 text-white"
      >
        Chat
      </div>
    </div>
  </div>
  <div class="bg-white px-4 py-4 mb-3">
    <div class="text-sm pb-2 font-semibold">Detail Produk</div>
    <div class="text-sm">Geplak enak manis,legendaris</div>
  </div>
  <div class="bg-white px-4 py-4">
    <div class="text-sm pb-2 font-semibold">Review</div>
    <div class="flex flex-col space-y-3">
      <div class="flex space-x-3">
        <img
          class="rounded-full h-12 w-12 object-cover"
          src="https://pict-b.sindonews.net/dyn/850/pena/news/2022/01/16/187/658105/doddy-sudrajat-mendadak-sambangi-rumah-h-faisal-ada-apa-wbj.jpg"
          alt="sudrajat"
        />
        <div>
          <div class="flex space-x-2 items-center">
            <div class="text-md font-semibold">Pak Sudrajat</div>
            <div class="text-sm text-slate-800">⭐️ (5.0)</div>
          </div>
          <div class="text-sm">"Geplak enak manis,legendaris"</div>
        </div>
      </div>
      <div class="flex space-x-3">
        <img
          class="rounded-full h-12 w-12 object-cover"
          src="https://pict-b.sindonews.net/dyn/850/pena/news/2022/01/16/187/658105/doddy-sudrajat-mendadak-sambangi-rumah-h-faisal-ada-apa-wbj.jpg"
          alt="sudrajat"
        />
        <div>
          <div class="flex space-x-2 items-center">
            <div class="text-md font-semibold">Pak Sudrajat</div>
            <div class="text-sm text-slate-800">⭐️ (5.0)</div>
          </div>
          <div class="text-sm">"Geplak enak manis,legendaris"</div>
        </div>
      </div>
      <div class="flex space-x-3">
        <img
          class="rounded-full h-12 w-12 object-cover"
          src="https://pict-b.sindonews.net/dyn/850/pena/news/2022/01/16/187/658105/doddy-sudrajat-mendadak-sambangi-rumah-h-faisal-ada-apa-wbj.jpg"
          alt="sudrajat"
        />
        <div>
          <div class="flex space-x-2 items-center">
            <div class="text-md font-semibold">Pak Sudrajat</div>
            <div class="text-sm text-slate-800">⭐️ (5.0)</div>
          </div>
          <div class="text-sm">"Geplak enak manis,legendaris"</div>
        </div>
      </div>
    </div>
    <div
      class="p-3 mt-6 rounded text-center text-sm font-bold bg-rose-800 text-white"
    >
      Lihat review lebih banyak
    </div>
  </div>
</div>

<style>
</style>
