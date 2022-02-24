<script>
  import { ItemDetailViewPath } from "../../router";

  import { push } from "svelte-spa-router";

  import ItemEntry from "/src/components/ItemEntry.svelte";
  import Navbar from "/src/components/Navbar.svelte";
</script>

<div class="bg-slate-100 h-full">
  <Navbar withBack={true} />
  <div class="pt-6 px-3 pb-4 bg-white">
    <div class="text-2xl font-bold">Makanan</div>
    <div class="flex items-center space-x-2 pt-2">
      <div class="text-sm">Sortir berdasarkan</div>
      <div class="rounded-full border border-slate-600 px-3 p-1 text-sm">
        Promo
      </div>
      <div class="rounded-full border border-slate-600 px-3 p-1 text-sm">
        Jarak
      </div>
      <div class="rounded-full border border-slate-600 px-3 p-1 text-sm">
        Rating
      </div>
    </div>
  </div>
  <div class="mt-3 py-6 flex flex-col space-y-2 bg-white">
    <ItemEntry
      on:click={() => push(ItemDetailViewPath)}
      name="Ayam Panggang Pak Imin"
      imgSrc="https://klatenkab.go.id/wp-content/uploads/2018/01/WhatsApp-Image-2018-01-15-at-13.34.01.jpeg"
      countRating={4.4}
      countRespondent={400}
      distanceInKM={0.2}
      price="10000"
      priceUnit="Porsi"
    />
    <ItemEntry
      on:click={() => push(ItemDetailViewPath)}
      name="Geplak"
      imgSrc="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-geplak.jpg?resize=637%2C425"
      countRating={0.4}
      countRespondent={400}
      distanceInKM={1.1}
      price="11000"
      priceUnit="KG"
    />
    <ItemEntry
      on:click={() => push(ItemDetailViewPath)}
      name="Keripik Belut"
      imgSrc="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-kripik-belut.jpg?resize=637%2C427"
      countRating={0.9}
      countRespondent={400}
      distanceInKM={1.1}
      price="11000"
      priceUnit="KG"
    />
    <ItemEntry
      on:click={() => push(ItemDetailViewPath)}
      name="Sego Wiwit Bu Nur"
      imgSrc="https://i0.wp.com/bosmeal.com/wp-content/uploads/2020/06/makanan-khas-klaten-sego-wiwit.jpg?resize=637%2C451"
      countRating={4.4}
      countRespondent={400}
      distanceInKM={1.1}
      price="10000"
      priceUnit="Porsi"
    />
    <ItemEntry
      on:click={() => push(ItemDetailViewPath)}
      name="Daging Sapi Halal Desa Ceper"
      imgSrc="https://t-2.tstatic.net/jogja/foto/bank/images/daging-pasar-sleman_20150811_082950.jpg"
      countRating={5.4}
      countRespondent={400}
      distanceInKM={1.1}
      price="11000"
      priceUnit="KG"
    />
    <ItemEntry
      on:click={() => push(ItemDetailViewPath)}
      name="Beras Desa Bayat"
      imgSrc="https://asset.kompas.com/crops/y-QKCmVe2CCyepusFMaK4dSLaVM=/0x0:1000x667/750x500/data/photo/2017/07/26/154557720170726-033930-7354-pasar.induk-.beras-.cipinang-.perdagangan-.beras-.pemerintah-.JPG"
      countRating={3.9}
      countRespondent={400}
      distanceInKM={1.1}
      price="11000"
      priceUnit="KG"
    />
  </div>
</div>
