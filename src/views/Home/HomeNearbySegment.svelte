<script>
  import { ItemDetailViewPath } from "../../router";

  import { push } from "svelte-spa-router";

  import ItemEntry from "../../components/ItemEntry.svelte";
</script>

<div class="block">
  <div class="flex items-center justify-between px-3 pb-4">
    <div class="text-2xl font-bold">Terdekat dari anda 🚶</div>
    <div class="text-xs font-semibold text-blue-700">Lihat semua</div>
  </div>
  <div class="flex flex-col space-y-2">
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
  </div>
</div>
