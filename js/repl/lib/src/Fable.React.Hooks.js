function HookBindings$$$makeDummyStateHook(value) {
  return {
    get current() {
      return value;
    },

    update(x) {},

    update(f) {}

  };
}
