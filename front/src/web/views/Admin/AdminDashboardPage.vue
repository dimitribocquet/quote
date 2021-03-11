<template>
  <div class="admin-dashboard">
    <div class="text-2xl text-gray-400">Dashboard</div>
    <dl class="mt-5 grid grid-cols-1 gap-5 grid-cols-2">
      <StatsCard title="Total Users" :value="stats.total_users || '...'" link="/admin/users" />
      <StatsCard title="Total Channels" :value="stats.total_channels || '...'" link="/admin/channels" />
    </dl>
  </div>
</template>

<script>

import AdminService from 'src/web/services/AdminService'

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
        stats: {},
    }
  },
  async created() {
    this.stats = await AdminService.dashboardStats()
    console.log('stats received', this.stats);
  }
}
</script>