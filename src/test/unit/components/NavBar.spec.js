import { describe, it, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '@/router'
import NavBar from '../../../components/NavBar.vue'

function mountNavbar() {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    })
    return wrapper
  }

  describe('NavBar links', () => {
    it('mounts properly', () => {
      expect(mountNavbar().text()).toContain('Default Page')
    })

    test('click the links', async () => {
      const push = vi.spyOn(router, 'push')

      await mountNavbar().find('a[id=list]').trigger('click')

      expect(push).toHaveBeenCalledOnce()
      expect(push).toHaveBeenCalledWith('/movies/list')

      await mountNavbar().find('a[id=default]').trigger('click')
      
      expect(push).toHaveBeenCalledTimes(2)
      expect(push).toHaveBeenCalledWith('/movies/default')
    })
  })