export const describe = (title, test) => {
  console.log(title);
  test();
}

export const it = (title, test) => {
  try {
    test();
    console.log('  \x1b[32m%s\x1b[0m', `✓ ${title}`);
  } catch (error) {
    console.error('  \x1b[31m%s\x1b[0m', `✕ ${title} => ${error}`);
  }
}
