<template>
  <div class="admin-dashboard">
    <div class="text-2xl text-gray-400">Dashboard</div>
    <dl class="mt-5 grid grid-cols-1 gap-5 grid-cols-2">
      <StatsCard title="Total Users" value="123" link="/admin/users" />
      <StatsCard title="Total Channels" value="456" link="/admin/channels" />
    </dl>
  </div>
</template>

<script>

import StatsCard from 'src/web/components/ui/StatsCard'

export default {
  name: 'AdminDashboardPage',
  components: {
    StatsCard
  },
  computed: {
      
  },
  data() {
    return {
        
    }
  }
}
</script>