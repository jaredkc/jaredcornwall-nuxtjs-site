<template>
  <div>
    <form action="" method="get" @submit.prevent="postRequest">
      <p>
        <input v-model="name" placeholder="Name" type="text" name="name" autocomplete="off">
        <button :disabled="name === ''">
          Post Request
        </button>
      </p>
    </form>
    <form action="" method="get" @submit.prevent="getRequest">
      <p>
        <button>
          Get Request
        </button>
      </p>
    </form>

    <pre v-if="response"><code>{{ response }}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'TestingApi',
  head() {
    return {
      title: 'API Testing'
    };
  },
  data() {
    return {
      name: '',
      response: ''
    };
  },
  methods: {
    async getRequest() {
      this.response = 'Loading get request...';
      // const req = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos/1');
      this.$axios.setHeader('Authorization', 'jFrTsiguRz2J7K');
      const req = await this.$axios.$get(
        'http://localhost:5000/jaredkcornwall/us-central1/api/get'
      );

      this.response = req;
    },
    async postRequest() {
      this.response = 'Loading get request...';

      // Adds header: `Authorization: 123` to all requests
      this.$axios.setHeader('Authorization', 'jFrTsiguRz2J7K');
      // Adds header: `Content-Type: application/json` to only post requests
      this.$axios.setHeader('Content-Type', 'application/json', ['post']);

      // const req = await this.$axios.$post(
      //   'https://jsonplaceholder.typicode.com/posts',
      //   {
      //     title: this.name,
      //     body: `This was written by ${this.name}.`,
      //     userId: 1
      //   }
      // );

      const req = await this.$axios.$post(
        'http://localhost:5000/jaredkcornwall/us-central1/api/post',
        {
          title: this.name,
          body: `This was written by ${this.name}.`,
          userId: 1
        }
      );

      this.response = req;
    }
  }
};
</script>

<style>
form {
  margin-bottom: 2rem;
}
input[type='text'],
button {
  font-size: 1rem;
}
input[type='text'] {
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}

code {
  color: #e83e8c;
  word-break: break-word;
}
pre {
  background-color: #f4f4f4;
  color: #212529;
  display: block;
  font-size: 87.5%;
  padding: 1rem;
  overflow: auto;
}
</style>
