const bind = (ctx, func) => {
  return (...arguments) => func.apply(ctx, arguments);
};

export default bind;