<!DOCTYPE html class="scroll-smooth hover:scroll-auto">
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="assets/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="estilo.css">
</head>

<body class="transition duration-300 ease-in-out text-neutral-900
antialiased bx-border">

    <?php include_once('header.php') ?>

    <h2 class="text-4xl text-red-800 text-center font-bold py-8 align-middle">
        Nossos produtos
    </h2>

    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-y-8 
    items-start text-neutral-900">

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/cozinha.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Cozinhas
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/sala_jantar.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Sala de Jantar
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/sala_estar.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Sala de Estar
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/dormitorio.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Dormitórios
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/banheiro.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Banheiros
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/hall_entrada.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Hall de Entreada
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/area_gourmet.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Área Gourmet
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/home_office.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Home Office
                    </a>
                </h3>

            </div>
        </div>

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/30">

            <img class="w-full h-80" src="assets/ambiente_profissional.png" loading="lazy">

            <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2 text-zinc-50 text-center">
                    <a href="produto.php" class="hover-effect effect-white">
                        Ambientes Profissionais
                    </a>
                </h3>

            </div>
        </div>


    </section>

    <?php include_once('footer.php') ?>
</body>

<script src="script.js"></script>

</html>