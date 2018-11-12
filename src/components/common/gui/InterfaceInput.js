import Vue from 'vue'

import InputAddress from '@/components/common/gui/InputAddress'
import InputUint from '@/components/common/gui/InputUint'
import InputString from '@/components/common/gui/InputString'
import InputBool from '@/components/common/gui/InputBool'
import InputByte from '@/components/common/gui/InputByte'
import InputAny from '@/components/common/gui/InputAny'

export default Vue.component('interface-input', {
  functional: true,
  render (createElement, context) {
    function getComponent (type) {
      switch (true) {
        case /address/.test(type):
          return InputAddress
        case /int/.test(type):
          return InputUint
        case /string/.test(type):
          return InputString
        case /bool/.test(type):
          return InputBool
        case /byte/.test(type):
          return InputByte
        default:
          return InputAny
      }
    }
    const component = getComponent(context.props.type)
    return createElement(component, context.data)
  }
})
