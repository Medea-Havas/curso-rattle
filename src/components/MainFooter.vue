<template>
  <div class="footer-wrap">
    <footer>
      <!-- <RouterLink to="/" class="logo-link">
        <Logo />
      </RouterLink>
      <span>Copyright &#169; {{ year }}. Medea</span>
      <div class="social">
        <a href="https://es.linkedin.com/company/somosmedea"><Linkedin /></a>
      </div> -->
      <a href="https://www.sanofi.es/es/aviso-legal" target="_blank"
        >Aviso legal</a
      >
      <a href="https://www.sanofi.es/es/politica-de-privacidad" target="_blank"
        >Política de privacidad</a
      >
    </footer>
  </div>
</template>

<script>
// import Logo from './svg/Logo.vue';
// import Linkedin from './svg/Linkedin.vue';

export default {
  // computed: {
  //   year() {
  //     return new Date().getFullYear();
  //   }
  // },
  // components: { Logo, Linkedin }
};
</script>

<style>
footer {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
footer a {
  color: var(--white);
  font-size: var(--small);
  padding: 0.5rem 1rem;
  transition: 0.2s all ease-out;
}
footer a:first-child {
  margin-right: 2rem;
}
footer a:hover {
  color: var(--pinklowlight);
  transition: 0.2s all ease-in;
}
.footer-wrap {
  background: var(--steelbluelowlight);
}
/* footer > img {
  width: 6rem;
}
span {
  color: var(--white);
  display: block;
  font-size: var(--small);
  order: 3;
  text-align: center;
  width: 100%;
}
#linkedin {
  fill: var(--white);
  width: 1.5rem;
}
.logo {
  fill: var(--white);
  width: 8rem;
}
.logo-link {
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
}
.logo-link:hover .logo path {
  fill: var(--skyblue);
}
.social {
  margin-bottom: 0.25rem;
  order: 2;
  text-align: center;
  width: 100%;
}
.social a {
  display: inline-block;
  border-radius: 9999px;
  padding: 0.5rem 0.65rem;
}
.social a:hover {
  background: var(--pinkhighlight);
  transition: 0.5s all cubic-bezier(0.4, 0, 0.2, 1);
}
.social a:hover #linkedin {
  color: var(--pink);
  fill: var(--pinklowlight);
  transition: 0.5s all cubic-bezier(0.4, 0, 0.2, 1);
}
@media (min-width: 800px) {
  footer {
    flex-wrap: nowrap;
  }
  span {
    order: 2;
    text-align: left;
    width: unset;
  }
  .logo-link {
    margin-bottom: 0;
    text-align: left;
    width: unset;
  }
  .social {
    margin-bottom: 0;
    order: 3;
    text-align: left;
    width: unset;
  }
} */
</style>
