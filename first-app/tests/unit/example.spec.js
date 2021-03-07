import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Vuetify);

describe('HelloWorld.vue', () => {
  it('renders successfully', () => {
    const localVue = createLocalVue()
    shallowMount(HelloWorld, {
      localVue
    })
  })
})
