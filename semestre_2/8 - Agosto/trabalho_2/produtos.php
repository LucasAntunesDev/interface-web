<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="shortcut icon" href="data:image/png;base64,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" type="image/x-icon">
    <link rel="stylesheet" href="estilo.css">
</head>

<body class="transition duration-300 ease-in-out text-neutral-900
antialiased bx-border">

    <?php include_once('header.php') ?>

    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-y-8 
    items-start pt-8 text-neutral-900">

        <div class="max-w-sm rounded-md overflow-hidden shadow-lg h-min max-h-auto 
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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
                hover:cursor-pointer  shadow-xl text-zinc-50 bg-red-800 shadow-red-600/50">

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