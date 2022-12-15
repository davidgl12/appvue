import Vue from 'Vue';
import PrincipalPagina from '@/components/PrincipalPagina';

describe('PrincipalPagina.vue', () => {
  it('deberia mostrar contenido correcto', () => {
    const Constructor = Vue.extend(PrincipalPagina);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.principal h1').to.equal('Principal'));
  });
});