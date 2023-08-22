// const scrollFunction = () => {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     //   document.querySelector("header").style.backgroundColor = "#252525";
//       document.querySelector("header").classList.add('');
//     } else{
//         document.querySelector("header").classList.remove('bg-none');
//     }
//   }
  
// window.onscroll = function() {scrollFunction()};

tailwind.config = {
    theme: {
      extend: {
        colors: {
          'red-600': '#8C4952',
          'red-800': '#57111a',
        }
      }
    }
}