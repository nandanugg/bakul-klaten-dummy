<script>
  import "./app.css";
  import "@splidejs/splide/dist/css/splide.min.css";
  import BottomNavbar from "./components/BottomNavbar.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "./router";
</script>

<main>
  <div class="flex flex-col h-screen">
    <div class="flex-grow">
      <Router {routes} />
    </div>
    <BottomNavbar />
  </div>
</main>

<style>
</style>
