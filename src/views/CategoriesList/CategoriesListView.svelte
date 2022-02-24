<script>
  import { CategoriesViewPath } from "../../router";

  import { push } from "svelte-spa-router";

  import NavbarWithBack from "/src/components/NavbarWithBack.svelte";

  let dapurCategories = [
    "sembako",
    "jajanan pasar",
    "sayuran ",
    "buah",
    "daging dan ikan",
    "bumbu dapu",
  ];
  let kebutuhanRumahCategories = [
    "makanan & minuman",
    "pakaian",
    "sepatu & sandal",
    "peralatan mandi",
    "alat2 RT",
    "perlengkapan bayi",
    "obat",
    "kosemetik",
  ];
  let kebutuhanPekerjaCategories = [
    "palawija",
    "alat pertanian",
    "properti",
    "peternakan & perikanan  ",
    "tekstil",
    "furnitur",
    "materi bangunan",
    "alat-ala",
  ];
</script>

<div>
  <NavbarWithBack title="Pilih Kategori" />
  <div class="pt-6 px-3 flex flex-col space-y-6">
    <div class="flex flex-col space-y-2">
      <div class="text-2xl">Kebutuhan Dapur</div>
      {#each dapurCategories as cat}
        <div
          on:click={() => push(CategoriesViewPath)}
          class="pl-2 text-lg py-4 border-b"
        >
          {cat}
        </div>
      {/each}
    </div>

    <div class="flex flex-col space-y-2">
      <div class="text-2xl">Kebutuhan Rumah</div>
      {#each kebutuhanRumahCategories as cat}
        <div
          on:click={() => push(CategoriesViewPath)}
          class="pl-2 text-lg py-4 border-b"
        >
          {cat}
        </div>
      {/each}
    </div>

    <div class="flex flex-col space-y-2">
      <div class="text-2xl">Kebutuhan Pekerja</div>
      {#each kebutuhanPekerjaCategories as cat}
        <div
          on:click={() => push(CategoriesViewPath)}
          class="pl-2 text-lg py-4 border-b"
        >
          {cat}
        </div>
      {/each}
    </div>
  </div>
</div>
