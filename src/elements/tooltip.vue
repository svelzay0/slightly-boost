<template>
  <div v-if="other === false" class="tooltip">
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
  <div v-else>
    <v-tooltip right>
      <template #activator="{ on, attrs }">
        <v-list-item-content v-bind="attrs" v-on="on">
          <v-list-item-title>
            <span>{{ oppId }}</span>
              <v-icon 
                x-small
                color="grey lighten-1"
                class="pl-2"
              >
                mdi-content-copy
              </v-icon>
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
    other: {
      type: Boolean,
      default: false
    },
    oppId: {
      type: Number,
      default: 0
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
