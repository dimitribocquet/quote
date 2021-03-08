import { db } from 'src/config/db';

const collection = db.collection('comments')

export default {
    all(channelParentId = null) {
        return collection
            .where('channelParentId', '==', channelParentId)
            .orderBy('orderId')
            ;
    },
    get(id) {
        return collection.doc(id);
    },
    create(userId, message, orderId = 1, geoReferenceId = 1, channelParentId = null) {
        const channelId = userId + '_' + geoReferenceId + '_' + orderId;

        return collection
            .add({
                userId: userId,
                orderId: orderId,
                georeferenceId: geoReferenceId,
                message: message,
                createdAt: new Date(),
                channelId: channelId,
                channelParentId: channelParentId,
            })
        ;
    }
}