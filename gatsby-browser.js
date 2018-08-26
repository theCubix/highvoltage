exports.onInitialClientRender = () => {
  if (typeof window !== `undefined`) {
    window.___HIGHVOLTAGE_INITIAL_RENDER_COMPLETE = true
  }
}
