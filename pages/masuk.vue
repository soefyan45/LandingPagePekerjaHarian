<template>
<div class="min-h-screen flex flex-col max-w-md mx-auto bg-white opacity-100 items-center font-poppins px-4">
  <div class="h-12 row items-start w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="my-auto h-12 w-8" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
  </div>
  <div class="px-4 w-full mt-28 items-left justify-start">
    <h1 class="font-semibold font-poppins">Lengkapi data dirimu di bawah ini ya</h1>
  </div>
  <div class="row px-4 pt-8 justify-between w-full">
    <div class="mb-4">
      <label for="email" class="block mb-2 text-sm text-gray-600 font-bold">Nama Lengkap</label>
      <input type="email" v-model="nama" name="email" id="email" placeholder="cth:nama" class="w-full placeholder-gray-300 border-t-0 border-l-0 border-r-0 border-b-2 outline-none focus:border-ijo-1" v-bind:class="{ 'border-red-300': errorEmail!=null, 'border-ijo-1': errorEmail==null}"/>
      <span class="text-xs text-red-500">{{errorNama}}</span>
    </div>
    <div class="mb-4">
      <label for="email" class="block mb-2 text-sm text-gray-600 font-bold">Nomor HP</label>
      <input type="email" v-model="email" name="email" id="email" placeholder="085271995583" class="w-full placeholder-gray-300 border-t-0 border-l-0 border-r-0 border-b-2 outline-none focus:border-ijo-1" v-bind:class="{ 'border-red-300': errorEmail!=null, 'border-ijo-1': errorEmail==null}"/>
      <span class="text-xs text-red-500">{{errorEmail}}</span>
    </div>
  </div>
  <div class="flex w-full h-12 mx-auto items-center fixed bottom-0 bg-ijo-1 z-50 absolute justify-center">
    <div class="max-w-md h-full flex items-center">
      <p class="text-xl font-semibold w-full text-white mx-auto">MASUK</p>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data() {
    return {
      email       : null,
      password    : null,
      nama        : null,
      handphone   : null,
      errorEmail  : null,
      errorNama   : null,
    }
  },

}
</script>

<style>
</style>
