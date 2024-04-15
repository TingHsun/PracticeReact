const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

async function getUsers() {
  await sleep(5000);

  return [
    { seq: 1, name: "Max" },
    { seq: 2, name: "Tim" },
    { seq: 3, name: "Jake" },
  ];
}

export { getUsers };
