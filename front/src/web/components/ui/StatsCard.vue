<template>
    <div class="flex flex-col bg-white overflow-hidden shadow rounded-lg">
      <div class="flex-grow px-4 py-5 sm:p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0 bg-pink-500 rounded-md p-3">
            <slot></slot>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dt class="text-sm font-medium text-gray-500 truncate">
              {{ title }}
            </dt>
            <dd class="flex items-baseline">
              <div class="text-2xl font-semibold text-gray-900">
                {{ value }}
              </div>
            </dd>
          </div>
        </div>
      </div>
      <div v-if="link" class="bg-gray-50 px-4 py-4 sm:px-6">
        <div class="text-sm">
          <a :href="link" class="font-medium text-pink-600 hover:text-pink-500">
              <template v-if="linkLabel">
                  {{ linkLabel }}
              </template>
              <template v-else>
                  View<span class="sr-only"> {{ title }} stats</span>
              </template>
          </a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'StatsCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            required: true,
        },
        link: {
            type: [String, Object],
        },
        linkLabel: {
            type: String
        },
    }
}
</script>