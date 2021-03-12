<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="ctable flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th v-for="column in columns" :key="column" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{ column | camelCaseToTitle }}
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="'item_'+index">
              <td v-for="column in columns" :key="'cell_'+column+'_'+index" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ item[column] || '' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                <!-- <router-link v-if="editRouterName" :to="{name: editRouterName, params: {id: item._id}}" class="text-pink-600 hover:text-pink-900">Edit</router-link> -->
                <button class="text-pink-600 hover:text-pink-900" @click="$emit('edit', item._id)">Edit</button>
                <button class="text-pink-600 hover:text-pink-900" @click="$emit('delete', item._id)">Delete</button>
              </td>
            </tr>
            <!-- Odd row -->
            <!-- <tr class="bg-white">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Jane Cooper
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Regional Paradigm Technician
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr> -->

            <!-- Even row -->
            <!-- <tr class="bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Cody Fisher
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Product Directives Officer
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                cody.fisher@example.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Owner
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr> -->

            <!-- More items... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: 'CTable',
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      list: {
        type: Array,
        default: () => []
      },
      editRouterName: {
        type: Object,
      }
    },
    computed: {
      // columns() {
      //   if(this.list.length > 0) {
      //     return Object.keys(this.list[0]);
      //   }

      //   return [];
      // }
    },
    data() {
        return {
            
        }
    },
    filters: {
      camelCaseToTitle: (string) => {
        let words = string.match(/[A-Za-z][a-z]*/g) || [];
        return words.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
      }
    }
}
</script>