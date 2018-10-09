import Vue from 'vue'

import InputAddress from '@/components/common/gui/InputAddress'
import InputUint from '@/components/common/gui/InputUint'
import InputString from '@/components/common/gui/InputString'

export default Vue.component('interface-input', {
  functional: true,
  render (createElement, context) {
    function getComponent (type) {
      switch (true) {
        case /address/.test(type):
          return InputAddress
        case /uint/.test(type):
          return InputUint
        case /string/.test(type):
          return InputString
        default:
          return InputAddress
      }
    }
    const component = getComponent(context.props.type)
    return createElement(component, context.data)
  }
})
