<template>
<div class="min-h-screen flex flex-col max-w-md mx-auto bg-white opacity-100 items-center font-poppins px-4">
  <div class="mt-32 mx-auto">
    <img src="@/assets/images/apps/1.png">
  </div>
  <div class="px-4 w-full mt-10 items-left justify-start space-y-4">
    <h1 class=" font-semibold font-poppins">Selamat datang di Pekerja Harian</h1>
    <p class="text-xs">Mau bersih perkarangan rumah, pangkas rambut, barang elektronik rusak, dan segala kebutuhan lainnya? <strong>Pekerja Harian</strong> solusinya.</p>
  </div>
  <div class="flex mx-4 pt-16 justify-between w-full">
    <!-- <button class="px-4 py-2 bg-ijo-1 text-white">MASUK</button> -->
    <nuxt-link to="/masuk" class="w-6/12 mx-2 h-10 bg-ijo-1 hover:bg-ijo-2 rounded flex items-center">
      <p class="mx-auto my-auto text-white font-semibold">MASUK</p>
    </nuxt-link>
    <nuxt-link to="/daftar" class="w-6/12 mx-2 h-10 border-2 border-ijo-1 rounded flex items-center">
      <p class="mx-auto my-auto text-ijo-1 font-semibold">DAFTAR</p>
    </nuxt-link>
  </div>
  <div class="flex w-full mx-auto items-center fixed bottom-0 z-50 px-4 mb-4 absolute justify-center">
    <p class="text-note text-gray-800">*Dengan masuk atau mendaftar, kamu menyetujui <strong>Ketentuan Layanan</strong> dan <strong>Privasi</strong>.</p>
  </div>
</div>
</template>

<script>
export default{

}
</script>

<style>
</style>
