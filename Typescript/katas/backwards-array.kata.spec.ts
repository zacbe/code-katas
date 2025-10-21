function createBackwardsArray(items: number[]): number[] {

  const backWardsArray: number[] = []
  for (let i = items.length-1; i >= 0; i--) {
    backWardsArray.push(items[i])
  }
  return backWardsArray
}

const array = Array.from({ length: 99 }, (_, i) => i + 1);
const result = createBackwardsArray(array)
console.log(result)