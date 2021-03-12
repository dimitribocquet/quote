<template>
    <div>
        <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input 
            ref="input"
            :id="name"
            class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            :type="type"
            :placeholder="placeholder"
            :value="value" @input="$emit('input', $event.target.value);"
            v-on="inputListeners"
        >
    </div>
</template>
<script>
export default {
    name: 'FormInput',
    props: {
        name: String,
        value: [String,null],
        type: {
            default: 'text'
        },
        label: {
            required: false
        },
        hint: {
            required: false
        },
        placeholder: {
            required: false
        },
        description: {
            required: false
        },
        addon: {
            required: false
        },
    },
    computed: {
        // https://fr.vuejs.org/v2/guide/components-custom-events.html#Relier-des-evenements-natifs-aux-composants
        inputListeners: function () {
            var vm = this
            return Object.assign({},
                this.$listeners,
                {
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    },
}
</script>