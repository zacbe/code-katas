function createRoutes(stops: Array<string>): string[] {
  const routes: string[]=[]

  for (let i = 0; i < stops.length; i++) {
    for (let j = 0; j < stops.length; j++) {
      if (stops[i] !== stops[j]) {
        const route = `${stops[i]}-${stops[j]}`
        routes.push(route)
      }
    }
  }
  return routes
}


const stops = ["a", "b", "c"]
const routes = createRoutes(stops)
console.log(routes)