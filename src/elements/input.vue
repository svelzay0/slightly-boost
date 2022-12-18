<template>
  <div class="input" :class="{ input_label_less: !label }">
    <div v-if="title" class="label">
      {{ title }}
    </div>
    <v-text-field
      v-if="mask"
      ref="textField"
      v-mask="mask"
      autocomplete="off"
      :counter="counter"
      :disabled="disabled"
      :label="label"
      :name="name"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :required="required"
      :rules="rules"
      :type="type"
      :value="value"
      class="input-item"
      :height="height"
      :class="{ 'input-item_has-icon': icon }"
      outlined
      flat
      @blur="$emit('blur', $event)"
      @change="$emit('change', $event)"
      @click="$emit('click', $event)"
      @input="$emit('input', $event)"
    >
      <i
        v-if="icon"
        slot="prepend-inner"
        class="icon icon_size_input"
        :class="`icon_${icon}`"
      />
      <slot slot="append" name="append" />
    </v-text-field>
    <v-text-field
      v-else
      ref="textField"
      autocomplete="off"
      :counter="counter"
      :disabled="disabled"
      :label="label"
      :name="name"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :required="required"
      :rules="rules"
      :type="type"
      :value="value"
      :height="height"
      class="input-item"
      :class="{ 'input-item_has-icon': icon }"
      outlined
      flat
      @blur="$emit('blur', $event)"
      @click="$emit('click', $event)"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @keyup="$emit('keyup', $event)"
      @keydown.space="$emit('keydown', $event)"
    >
      <i
        v-if="icon"
        slot="prepend-inner"
        class="icon icon_size_input"
        :class="`icon_${icon}`"
      />
      <slot slot="append" name="append" />
    </v-text-field>
    <div class="input-message">{{ props.message }}</div>
    <div class="input-type">{{ props.type }}</div>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';

export default {
  directives: {
    mask,
  },
  props: {
    counter: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    mask: {
      type: String,
      default: null,
    },
    maxlength: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    height: {
      type: Number,
      default: 50,
    },
    props: {
      type: Object,
      default: () => ({}),
    },
    required: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: null,
    },
    value: {
      default: null,
      validator: (value) => {
        return (
          value === null ||
          typeof value === 'string' ||
          typeof value === 'number'
        );
      },
    },
  },
};
</script>
