<template>
    <div class="flex flex-col bg-white overflow-hidden shadow rounded-lg">
      <div class="flex-grow px-4 py-5 sm:p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0 bg-pink-500 rounded-md p-3">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
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