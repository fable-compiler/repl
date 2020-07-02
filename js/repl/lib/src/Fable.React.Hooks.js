function HookBindings$$$makeDummyStateHook(value) {
  return {
    get current() {
      return value;
    },

    update(x) {
      void null;
    },

    update(f) {
      void null;
    }

  };
}
