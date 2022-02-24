<script>
  import { createEventDispatcher } from "svelte";

  export let imgSrc = "";
  export let name = "";
  export let countRating = 0;
  export let countRespondent = 0;
  export let distanceInKM = 0;
  export let price = "";
  export let priceUnit = "";

  const dispatch = createEventDispatcher();

  function getRating() {
    let strTemp = "⭐️";
    strTemp += ` (${countRating}) dari ${countRespondent} pembeli`;
    return strTemp;
  }

  function getPrice() {
    return `Rp${price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
  }

  function dispatchOnClick() {
    dispatch("click");
  }
</script>

<div class="px-2 flex flex-col space-y-4" on:click={dispatchOnClick}>
  <div
    class="h-28 overflow-clip flex space-x-4 items-center border-2 rounded-md"
  >
    <div class="w-1/3 h-full">
      <img class="w-full h-full object-cover" src={imgSrc} alt={name} />
    </div>
    <div class="w-2/3 pr-2">
      <div class="truncate text-xl font-semibold">{name}</div>
      <div class="flex space-x-2">
        <div class="flex items-center space-x-1">
          <div class="w-4 h-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
              ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                d="M352 48C352 21.49 373.5 0 400 0C426.5 0 448 21.49 448 48C448 74.51 426.5 96 400 96C373.5 96 352 74.51 352 48zM480 159.1C497.7 159.1 512 174.3 512 191.1C512 209.7 497.7 223.1 480 223.1H416C408.7 223.1 401.7 221.5 396 216.1L355.3 184.4L295 232.9L337.8 261.4C346.7 267.3 352 277.3 352 288V416C352 433.7 337.7 448 320 448C302.3 448 288 433.7 288 416V305.1L227.5 266.8C194.7 245.1 192.5 198.9 223.2 175.2L306.3 110.9C323.8 97.45 348.1 97.58 365.4 111.2L427.2 159.1H480zM256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384zM128 312C88.24 312 56 344.2 56 384C56 423.8 88.24 456 128 456C167.8 456 200 423.8 200 384C200 344.2 167.8 312 128 312zM640 384C640 454.7 582.7 512 512 512C441.3 512 384 454.7 384 384C384 313.3 441.3 256 512 256C582.7 256 640 313.3 640 384zM512 312C472.2 312 440 344.2 440 384C440 423.8 472.2 456 512 456C551.8 456 584 423.8 584 384C584 344.2 551.8 312 512 312z"
              /></svg
            >
          </div>
          <div class="whitespace-nowrap">{distanceInKM} KM</div>
        </div>
        <div class="truncate text-slate-600 text-md">{getRating()}</div>
      </div>
      <div class="flex items-center space-x-1">
        <div class="truncate text-xl">{getPrice()}</div>
        <div class="text-sm text-slate-800">/ {priceUnit}</div>
      </div>
    </div>
  </div>
</div>
