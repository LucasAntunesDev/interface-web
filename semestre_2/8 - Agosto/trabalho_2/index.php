<!DOCTYPE html class="scroll-smooth">
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Início</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="assets/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="estilo.css">
</head>

<body class="transition duration-300 ease-in-out text-neutral-900
antialiased bx-border">

    <?php include_once('header.php') ?>
    <div class="bg-[url(assets/banner.png)]
    bg-contain">


        <section class="h-[30rem] bg-contain flex flex-col items-center justify-center
            gap-y-4 shadow-md top-0  w-full bg-cover backdrop-blur-[1px] bg-black/40">
            <h1 class="text-zinc-50 font-bold text-6xl text-center drop-shadow-sm">
                ACL Móveis Sob Medida
            </h1>

            <p class="text-zinc-50 font-bold mb-8 w-[50%] drop-shadow-sm">
                Realize o seu sonho de ter uma casa com móveis que são a sua cara. Nós fazemos móveis sob
                medida com design e sofisticação de alta qualidade para o seu
                espaço.
            </p>
        </section>

    </div>


    <section class="flex justify-center items-center pt-8">

        <div class="flex flex-col justify-center items-center gap-y-4 w-5/12">

            <h2 class="text-3xl font-bold text-red-800 uppercase w-[70%] wrap">
                o seu sonho realizado com design, sofisticação e qualidade.
            </h2>

            <p class="w-[95%] mx-auto">
                Se você procura móveis que combinam com o seu estilo
                e o seu orçamento, você precisa conhecer os móveis
                sob medida que nós fazemos para o seu espaço. Nós
                temos design, sofisticação e qualidade em cada peça
                que fabricamos. Nós transformamos o seu sonho em
                realidade, criando ambientes únicos e personalizados
                para a sua casa. Do projeto à entrega, nós cuidamos
                de tudo para você ter um lar lindo e confortável.
            </p>
        </div>

        <form action="#" class="flex justify-center items-center
       gap-y-4 w-[50%] gap-x-10">

            <div class="flex flex-col justify-center items-center gap-y-4">
                <label for="" class="text-neutral-900 flex flex-col outline-none w-[30rem]">
                    Nome
                    <input type="text" class="border-b border-neutral-900 outline-none">
                </label>

                <label for="" class="text-neutral-900 flex flex-col outline-none w-[30rem]">
                    Telefone
                    <input type="text" class="border-b border-neutral-900 outline-none">
                </label>

                <label for="" class="text-neutral-900 flex flex-col outline-none w-[30rem]">
                    E-mail
                    <input type="text" class="border-b border-neutral-900 outline-none">
                </label>

                <button class="bg-neutral-900 py-2 px-16 rounded-sm text-zinc-50 mt-8
                hover:bg-neutral-900/70">
                    Enviar
                </button>
            </div>

            <textarea cols="40" rows="10" class="border-neutral-900 border-solid  border-[1px] pr-8
            placeholder:text-center resize-none" placeholder="Digite a sua mensagem"></textarea>

        </form>

    </section>

    <?php include_once('footer.php') ?>
</body>

<script src="script.js"></script>

</html>