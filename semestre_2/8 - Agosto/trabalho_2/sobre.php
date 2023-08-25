<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="assets/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="estilo.css">
</head>

<body class="transition duration-300 ease-in-out text-neutral-900
antialiased bx-border">

    <?php include_once('header.php') ?>

    <section class="flex justify-center items-center pt-8 text-neutral-900 h-[82.7vh]">

        <div class="grid grid-cols-3 justify-center">
            <img src="assets/exemplo_1.png" class="h-80">
            <img src="assets/exemplo_2.png" class="h-80">
            <img src="assets/exemplo_3.png" class="h-80">

        </div>

        <div class="flex flex-col justify-center items-center gap-y-4 w-5/12 mb-8">

            <h2 class="text-3xl font-bold text-red-800">
                Focamos na Qualidade
            </h2>

            <p class="w-[70%]">
                A ACL Móveis teve início em 23 de outubro de 1998,
                marcada por a realização de um sonho de seus três sócios .
                Acredita ser essencial aprimorar-se constantemente e procurar
                sempre novos meios para atender com cada vez mais eficiência às
                necessidades dos clientes. Para isso, está sempre aperfeiçoando
                seus móveis com a elaboração de novos designs, criando um visual
                moderno, atrativo e principalmente exclusivo. Fazendo com que o
                cliente tenha um ambiente confortável, prático, arrojado e bonito.
            </p>
            <p class="w-[70%]">
                A empresa desenvolve-se, inova e surpreende, com design e sofisticação
                de alta qualidade, sempre inspirada em seu objetivo maior: produzir conforto
                e bem estar, oferecendo altos padrões de qualidade com consciência ambiental.
            </p>
        </div>

    </section>

    <?php include_once('footer.php')?>
</body>

<script src="script.js"></script>

</html>