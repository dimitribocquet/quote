<template>
  <div class="admin-dashboard">
    <div class="text-2xl text-gray-400">Dashboard</div>
    <dl class="mt-5 grid grid-cols-1 gap-5 grid-cols-2">
      <StatsCard title="Total Users" :value="stats.total_users || '...'" link="/admin/users">
        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </StatsCard>
      <StatsCard title="Total Channels" :value="stats.total_channels || '...'" link="/admin/channels">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
        </svg>
      </StatsCard>
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