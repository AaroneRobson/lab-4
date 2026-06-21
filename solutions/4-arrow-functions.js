const each = (items, cb) => {
  for (let i = 0; i < items.length; i++) {
    cb.call(items[i]);
  }
};

export default each;