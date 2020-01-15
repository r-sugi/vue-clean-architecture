<template>
  <div>
    user index.vue
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LoadContainerUseCase, {
  ILoadContainerUseCase
} from "./LoadContainerUseCase";
import UserRepository from "@/repositories/UserRepository";
import ErrorService from "@/services/ErrorService";
import presenter, { IPresenter, IPresenterState } from "./presenter";

export default Vue.extend({
  components: {},
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    presenter(): IPresenterState {
      const params: IPresenter = {
        userRepository: new UserRepository()
      };
      return presenter(params);
    }
  },
  async mounted() {
    const params: ILoadContainerUseCase = {
      userRepository: new UserRepository(),
      id: parseInt(this.id, 10),
      errorService: new ErrorService({
        context: "mounting Users detail page"
      })
    };

    await new LoadContainerUseCase(params).execute();
  }
});
</script>
