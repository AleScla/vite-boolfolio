<script>
export default {
  data() {
    return {
      pokemons = [],
    }
  },
  methods:{
    getPokemonData(){
      axios.get('linkapi')
          .then((res)=>{
            this.pokemons = res.data
          })
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
          <div class="col">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Pokemon</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Azioni</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">ID pokemon</th>
                  <td>nome poke</td>
                  <td>nome tipo</td>
                  <td>
                    <router-link :to="{name:'show', params:{id:'idacaso'}}" class="btn btn-primary btn-sm">
                      Visualizza info Pokemon
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>