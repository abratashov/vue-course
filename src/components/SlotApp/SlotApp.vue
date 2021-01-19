<template>
  <div>
    <h1>Slot App</h1>
    <slot-comp>
      Passed '{{value}}' into the child component.
    </slot-comp>
  </div>
</template>

<script>

import SlotComp from './SlotComp'

export default {
  components: {
    SlotComp
  },
  data () {
    return {
      value: 'Slot Value'
    }
  },
}
</script>
