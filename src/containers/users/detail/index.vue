<template>
  <div class="ProductsDetail">
    <template v-if="presenter.user">
      <p>
        {{ presenter.user.familyName }}
        {{ presenter.user.firstName }}
      </p>
      <Button size="small" text="clear" @click="destroyed()" />
    </template>
    <template v-else>
      empty
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LoadContainerUseCase, {
  ILoadContainerUseCase
} from "./LoadContainerUseCase";
import UserRepository from "@/repositories/UserRepository";
import DestroyContainerUseCase, {
  IDestroyContainerUseCase
} from "./DestroyContainerUseCase";
import ErrorService from "@/services/ErrorService";
import presenter, { IPresenter, IPresenterState } from "./presenter";
import Button from "@/components/Base/Button.vue";

export default Vue.extend({
  components: {
    Button
  },
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
  },
  methods: {
    async destroyed() {
      const params: IDestroyContainerUseCase = {
        userRepository: new UserRepository()
      };

      await new DestroyContainerUseCase(params).execute();
    }
  }
});
</script>

<style lang="scss" scoped>
.ProductsDetail {
  display: flex;
  width: 80%;
  margin: auto;
}

.ProductsDetail__Left {
  flex: 2;
}

.ProductsDetail__Right {
  flex: 1;
}

.ProductsDetail__Image {
  width: 100%;
  height: 100%;
}

.ProductsDetail__Designer {
  font-weight: bold;
  font-size: 22px;
}

.ProductsDetail__Name {
  font-size: 12px;
}

.ProductsDetail__Info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
}

.ProductsDetail__Price {
  font-weight: bold;
  font-size: 20px;
}

.ProductsDetail__Button {
  width: 100%;
}
</style>
