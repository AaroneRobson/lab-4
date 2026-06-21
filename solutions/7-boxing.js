const magic = (...numbers) => {
  const total = numbers.reduce((acc, n) => acc + n, 0);
  
  const next = (...more) => {
    const nextTotal = more.reduce((acc, n) => acc + n, 0);
    return magic(total + nextTotal);
  };
  
  next.valueOf = () => total;
  return next;
};

export default magic;