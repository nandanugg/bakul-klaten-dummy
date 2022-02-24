<script>
  import CategoryItem from "../../components/CategoryItem.svelte";
  import { push } from "svelte-spa-router";
  import { CategoriesListViewPath, CategoriesViewPath } from "../../router";
</script>

<div class="px-3">
  <div class="flex justify-between">
    <div class="text-2xl font-bold pb-2">Kategori</div>
    <div class="text-xs font-semibold text-blue-700">Edit</div>
  </div>
  <div class="grid grid-cols-4 gap-y-4">
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      assetsSrc="src/assets/food-icon-96.png"
      name="Makanan"
    />
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      assetsSrc="src/assets/leaves-icon-96.png"
      name="Sayur & Buah"
    />
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      assetsSrc="src/assets/salmon-icon-96.png"
      name="Daging & Ikan"
    />
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      assetsSrc="src/assets/shirt-icon-96.png"
      name="Pakaian"
    />
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      assetsSrc="src/assets/medicine-icon-96.png"
      name="Obat Obatan"
    />
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      assetsSrc="src/assets/steel-icon-96.png"
      name="Materi Bangunan"
    />
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      assetsSrc="src/assets/field-tractor-icon-96.png"
      name="Pertanian & Perternakan"
    />
    <CategoryItem
      on:click={() => push(CategoriesListViewPath)}
      assetsSrc="src/assets/more-icon-96.png"
      name="Lihat lebih banyak"
    />
  </div>
</div>
