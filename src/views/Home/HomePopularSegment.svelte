<script>
  import { ItemDetailViewPath } from "../../router";
  import { push } from "svelte-spa-router";

  import ItemEntry from "../../components/ItemEntry.svelte";
</script>

<div class="block">
  <div class="flex items-center justify-between px-3 pb-4">
    <div class="text-2xl font-bold">Lagi populer 👑</div>
    <div class="text-xs font-semibold text-blue-700">Lihat semua</div>
  </div>
  <div class="flex flex-col space-y-2">
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
