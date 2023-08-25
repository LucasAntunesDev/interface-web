<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produto</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="assets/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="estilo.css">
</head>

<body class="transition duration-300 ease-in-out text-neutral-900
antialiased bx-border">

    <?php include_once('header.php') ?>

    <div class="bg-white">
  <div class="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="produtos.php" class="mr-2 text-sm font-medium text-gray-900">Produtos</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <!-- <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li> -->

        <li class="text-sm">
          <a href="produto.php" aria-current="page" class="font-medium text-red-800 hover:text-red-600">
            Home Office
          </a>
        </li>
      </ol>
    </nav>

     <!-- Product info -->
     <div class="flex flex-col justify-center items-center px-4 sm:px-6
    lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr]">
      <div>
        <h1 class="text-5xl font-bold tracking-tight text-red-800">
          Home Office
        </h1>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
        <!-- Description and details -->
        <div>
          <h3 class="sr-only">Descrção</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900 max-w-xl">
            Se você está procurando móveis de qualidade, 
            conforto e personalização para o seu home office, 
            você veio ao lugar certo. Na nossa empresa, nós oferecemos uma 
            variedade de produtos home office de móveis sob medida, que se 
            adaptam ao seu espaço e ao seu estilo.
            </p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Destaques ✅</h3>

          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">Alta qualidade</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Diversos modelos</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Altas avaliações</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Produzidos por profissionais qualificados</span></li>
            </ul>
          </div>
        </div>

        <!-- <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img src="assets/home_office.png" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="assets/home_office_2.png" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="assets/home_office_3.png" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>
      <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img src="assets/home_office_4.png" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
      </div>
    </div>

   
  </div>
</div>

    <?php include_once('footer.php') ?>
</body>

<script src="script.js"></script>

</html>