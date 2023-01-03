<template>
  <v-select
    v-if="eloFrom"
    class="elo-calc-class"
    :items="selectItems"
    item-text="text"
    item-value="id"
    v-model="defaultSelectedFrom"
    outlined
    dense
    return-object
  >
    <template slot='selection'>
      <div v-if="this.check === false" class="level-0" />
      <div v-else :class="`level-${this.defaultSelectedFrom.id + 1}`" />
    </template>
    <template v-slot:item="{ index = i += 1 }">
      <div 
        class="select-slot"
        @click="checkIndex(index - 1)"
      >
        <div :class="`level-${index}`" /> 
        <span class="pl-2">
          Lvl {{ index }}
        </span>
      </div>
    </template>
  </v-select>
  <v-select
    v-else
    class="elo-calc-class"
    :items="selectItems"
    item-text="text"
    item-value="id"
    v-model="defaultSelectedTo"
    outlined
    dense
    return-object
  >
    <template slot='selection'>
      <div v-if="this.defaultSelectedTo.text === '0'" class="level-0" />
      <div v-else :class="`level-${this.defaultSelectedTo.id + 1}`" />
    </template>
    <template v-slot:item="{ index = i += 1 }">
      <div 
        class="select-slot"
        @click="checkIndex(index - 1)"
      >
        <div :class="`level-${index}`" /> 
        <span class="pl-2">
          Lvl {{ index }}
        </span>
      </div>
    </template>
  </v-select>
</template>

<script>

export default {
  name: 'ElementSelect',
  props: {
    defaultSelectedFrom: {
      type: Object,
      required: true
    },
    defaultSelectedTo: {
      type: Object,
      required: true
    },
    selectItems: {
      type: Array,
      required: true
    },
    eloFrom: {
      type: Boolean,
      default: false
    },
    eloTo: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      i: 0,
      index: 0,
      data: {},
      check: false,
    }
  }, 
  methods: {
    checkIndex(index) {
      this.check = true;
      this.index = index + 1;
      let way;
      if (this.eloFrom) {
        way = 'from';
      } else {
        way = 'to';
      }
      this.data = {
        index,
        way
      }
      this.$emit('setLvl', this.data);
    },
  }
}
</script>
