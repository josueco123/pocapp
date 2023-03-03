import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AuthView from '../../../views/AuthView.vue'

function mountForm () {
    const wrapper = mount(AuthView, { props: {} })
    return wrapper
  }

describe('Auth fogin form', () => {
    it('Mounts properly', () => {
      expect(mountForm()).toBeTruthy()
      expect(mountForm().text()).toContain('Login')
    })
    
    it('click the submit button', async () => {
      const form = mountForm().find('form')
      const spyOnForm = vi.spyOn(form, 'trigger')
      await form.trigger('click')
      
      expect(spyOnForm).toHaveBeenCalledOnce()
    })

    it('Renders the input value', async () => {
      const input = mountForm().find('input[id=email]')
      expect(input.text()).toContain('')
      await input.setValue('jane@doe.com')

      expect(input.element.value).toEqual('jane@doe.com')
    })
  })