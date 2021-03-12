const axios = require('axios');

export default {
    async all() {
        let response = await axios.get('/admin/users')
        return response.data.map(item => formatItemResponse(item))
    },
    async get(id) {
        let response = await axios.get('/admin/users/'+id)
        return formatItemResponse(response.data)
    },
    async update(id, payload) {
        let response = await axios.patch('/admin/users/' + id, payload)
        return formatItemResponse(response.data)
    },
    async create(payload) {
        let response = await axios.post('/admin/users', payload)
        return formatItemResponse(response.data)
    },
    async delete(id) {
        let response = await axios.delete('/admin/users/' + id)
        return response.status == 200;
    }
}

function formatItemResponse(item) {
    return {
        ...item,
        createdAt: (new Date(item.createdAt)).toLocaleString(),
        updatedAt: (new Date(item.updatedAt)).toLocaleString(),
    }
}