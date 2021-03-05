<template>
  <button @click.prevent="logout">Logout</button>
</template>

<script>

import {auth} from '../../config/db';

export default {
  name: 'Logout',
  methods: {
      logout() {
          auth.signOut()
            .then(response => {
                console.log('logout ok!', response);
            })
            .catch(reason => {
                console.log('nope.', reason);
            })
      }
  }
}
</script>