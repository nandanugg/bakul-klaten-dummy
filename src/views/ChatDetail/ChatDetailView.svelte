<script>
  import NavbarWithBack from "/src/components/NavbarWithBack.svelte";
</script>

<div class="flex flex-col h-full">
  <NavbarWithBack title="Pak Minto" />
  <div class="flex-grow pt-4 px-3">
    <div class="flex space-x-4 pb-10 items-center">
      <img
        class="w-12 h-12 rounded-full"
        src="https://icotar.com/avatar/"
        alt=""
      />
      <div class="text-lg p-3 px-6 bg-rose-800 rounded-full text-white">
        Mas ini mau dikirim pakai apa?
      </div>
    </div>
  </div>
  <div
    class="sticky bottom-20 flex items-center border-2 border-slate-200 rounded-lg p-2 px-4 mb-2 mx-4"
  >
    <input
      type="text"
      class="outline-none flex-grow"
      placeholder="Ketik balasan anda disini"
    />
    <div class="w-5 h-5 fill-rose-800">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
        ><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
          d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
        /></svg
      >
    </div>
  </div>
</div>
