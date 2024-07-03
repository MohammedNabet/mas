export default function Publication() {
  return (
    <div class="relative  p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
      <img
        alt="moto"
        src="./OIP.jpeg"
        class="absolute w-40 h-40 mb-4 -right-10 -bottom-2"
      />
      <div class="w-4/6">
        <p class="mb-2 text-lg font-medium text-gray-800">
          Coupe
          du Monde 2026
        </p>
        <p class="text-xs text-gray-400">
          Detail is not an obsession, it is the very essence of perfection.
        </p>

        <br />
        <div class="flex -space-x-2">
          <a href="#" class="">
            <img
              class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="./canada.jpg"
              alt="Jade"
            />
          </a>
          <a href="#" class="">
            <img
              class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              src="./brazil.jpeg"
              alt="Jade"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
