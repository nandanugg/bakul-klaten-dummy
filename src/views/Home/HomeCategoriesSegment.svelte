<script>
  import CategoryItem from "../../components/CategoryItem.svelte";
  import { push } from "svelte-spa-router";
  import { CategoriesListViewPath, CategoriesViewPath } from "../../router";
  import foodIcon from "/src/assets/food-icon-96.png";
  import leavesIcon from "/src/assets/leaves-icon-96.png";
  import salmonIcon from "/src/assets/salmon-icon-96.png";
  import shirtIcon from "/src/assets/shirt-icon-96.png";
  import medicineIcon from "/src/assets/medicine-icon-96.png";
  import steelIcon from "/src/assets/steel-icon-96.png";
  import fieldTractorIcon from "/src/assets/field-tractor-icon-96.png";
  import moreIcon from "/src/assets/more-icon-96.png";
</script>

<div class="px-3">
  <div class="flex justify-between">
    <div class="text-2xl font-bold pb-2">Kategori</div>
    <div class="text-xs font-semibold text-blue-700">Edit</div>
  </div>
  <div class="grid grid-cols-4 gap-y-4">
    <CategoryItem on:click={() => push(CategoriesViewPath)} name="Makanan"
      ><img src={foodIcon} alt="category" /></CategoryItem
    >
    <CategoryItem on:click={() => push(CategoriesViewPath)} name="Sayur & Buah"
      ><img src={leavesIcon} alt="category" /></CategoryItem
    >
    <CategoryItem on:click={() => push(CategoriesViewPath)} name="Daging & Ikan"
      ><img src={salmonIcon} alt="category" /></CategoryItem
    >
    <CategoryItem on:click={() => push(CategoriesViewPath)} name="Pakaian"
      ><img src={shirtIcon} alt="category" /></CategoryItem
    >
    <CategoryItem on:click={() => push(CategoriesViewPath)} name="Obat Obatan"
      ><img src={medicineIcon} alt="category" /></CategoryItem
    >
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      name="Materi Bangunan"
      ><img src={steelIcon} alt="category" /></CategoryItem
    >
    <CategoryItem
      on:click={() => push(CategoriesViewPath)}
      name="Pertanian & Perternakan"
      ><img src={fieldTractorIcon} alt="category" /></CategoryItem
    >
    <CategoryItem
      on:click={() => push(CategoriesListViewPath)}
      name="Lihat lebih banyak"
      ><img src={moreIcon} alt="category" /></CategoryItem
    >
  </div>
</div>
