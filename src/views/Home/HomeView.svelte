<script>
  import Navbar from "../../components/Navbar.svelte";
  import HomeCategoriesSegment from "./HomeCategoriesSegment.svelte";
  import HomeNearbySegment from "./HomeNearbySegment.svelte";
  import HomePopularSegment from "./HomePopularSegment.svelte";
</script>

<div>
  <Navbar />
  <div class="flex flex-col space-y-8 pt-6">
    <HomeCategoriesSegment />
    <div class="flex flex-col space-y-16">
      <HomePopularSegment />
      <HomeNearbySegment />
    </div>
  </div>
</div>
