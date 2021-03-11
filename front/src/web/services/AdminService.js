import { db } from 'src/config/db';

const collection = db.collection('comments')
const axios = require('axios');

export default {
    async dashboardStats() {
        let response = await axios.get('/admin/dashboard/stats')
        let comments = (await collection.get()).docs

        return {
            ...response.data,
            total_channels: comments.length
        }
    }
}