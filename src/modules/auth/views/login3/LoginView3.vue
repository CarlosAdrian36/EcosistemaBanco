<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-semibold text-center">Iniciar Sesión</h1>
    <div class="flex justify-center">
      <!-- <img src="/src/assets/login/login2/nx-logo-N.png" alt="" /> -->
    </div>

    <!-- <input type="email" placeholder="Correo" class="w-full border rounded p-2" />
    <input type="password" placeholder="Contraseña" class="w-full border rounded p-2" /> -->
    <fieldset class="fieldset rounded-box w-full">
      <label class="label">Email</label>
      <input
        type="email"
        class="input input-[#004A98] w-full focus:outline-none focus:border-blue-500 rounded-3xl"
        placeholder="Email"
      />

      <label class="floating-label mt-4">
        <span class="bg-transparent px-1">Contraseña</span>
        <input
          type="password"
          placeholder="Contraseña"
          class="input bg-transparent border-none focus:outline-none"
        />
      </label>
    </fieldset>
    <label class="group relative block mt-6">
      <input
        type="password"
        class="w-full bg-transparent border-b-2 border-gray-400 focus:border-amber-500 focus:outline-none transition-all duration-200 peer"
        placeholder=" "
      />

      <span
        class="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 px-1 peer-focus:-top-3 peer-focus:text-amber-500 peer-focus:text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base"
      >
        Contraseña
      </span>
    </label>

    <button class="w-full bg-blue-600 text-white p-2 rounded-3xl">Ingresar</button>

    <p class="text-center text-sm">
      <RouterLink :to="{ name: 'recuperarContrasena3' }" class="text-blue-500 underline">
        ¿Olvidaste tu contraseña?
      </RouterLink>
    </p>
  </div>
</template>
<style scoped>
.floating-label span {
  background-color: transparent !important;
}
</style>
