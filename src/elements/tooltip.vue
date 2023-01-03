<template>
  <div class="tooltip">
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-list-item-content v-bind="attrs" v-on="on">
          <v-list-item-title>
            <div class="lil-i">
              <span class="lil-pt">i</span>
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </template>
      <span v-html="text" />
    </v-tooltip>
  </div>
</template>

<script>

export default {
  name: 'ElementTooltip',
  props: {
    text: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      i: 0,
      index: 0,
      data: {},
    }
  }, 
  methods: {
    checkIndex(index) {
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
